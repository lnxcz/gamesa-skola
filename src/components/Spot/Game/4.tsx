import React, { useState, ChangeEvent } from "react";
import toast from "react-hot-toast";
import { api } from "~/utils/api";

interface Message {
  first: string;
  second: string;
}

export default function Fourth(): JSX.Element {
  const checkData = api.spot.checkAnswer4.useMutation();

  const [message, setMessage] = useState<Message>({
    first: "",
    second: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setMessage({
      ...message,
      [name]: value,
    });
  }

  async function handleClick() {
    const status = await checkData.mutateAsync(message);

    if (status.correct === true) {
      toast.success("Správně");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Špatně");
    }
  }

  const backgroundImage =
    "https://cdn.discordapp.com/attachments/824638985082634250/1078427195447464036/4bg.jpg";

  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-center">
        <div className="border-2 border-dashed border-red-400 p-1 rounded-xl my-3">
          <div className="text-center text-3xl bg-red-800 py-2 w-80 rounded-lg font-bold ">Doplň slovo</div>
        </div>
      </div>

      <div className="flex justify-center text-black font-semibold">
        <div className="border-2 border-dashed border-red-800 p-1 rounded-xl mt-0 m-3">
          <div className="rounded-lg bg-red-400 w-80">
            <p className="text-2xl text-center pt-4">
              {" "}
              <input
                type="text"
                onChange={handleChange}
                value={message.first}
                name="first"
                className="text-gray-700 rounded mr-4 ml-4 w-32"
              />{" "}
              (slovo a písmeno) je rozpustná látka, která je pro lidské tělo nezbytná pro správnou funkci
              kostí a svalů.
            </p>
            <p className="text-2xl text-center pb-4 px-4 pt-2">
              Existují dvě hlavní formy{" "}
              <input
                type="text"
                onChange={handleChange}
                value={message.second}
                name="second"
                className="text-gray-700 rounded mr-4 ml-4 w-32"
              />{" "}
              (slovo a písmeno) ergokalciferol a cholekalciferol.
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-1">
        <div className="border-2 border-dashed border-red-800 p-1 rounded-xl mx-5 flex justify-center">
          <button onClick={handleClick} className="w-80 h-12 text-3xl bg-red-700 rounded-xl font-bold">
            Potvrdit
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src="https://cdn.discordapp.com/attachments/824638985082634250/1078419068211695719/vitaminD.png"
          alt="logo"
          className="w-40 h-40 mt-3"
        />
      </div>
    </div>
  );
}
