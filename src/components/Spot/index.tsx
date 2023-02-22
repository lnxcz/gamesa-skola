import dynamic from "next/dynamic";

interface LayoutProps {
  number: number;
}

const gameComponents = [
  dynamic(() => import("./Game/1")),
  dynamic(() => import("./Game/4")),
  dynamic(() => import("./Game/7")),
];

export default function Layout({ number }: LayoutProps) {
  const GameComponent = gameComponents[number - 1];

  return (
    //tady bude jeste nejaky close button
    <div className="z-10 absolute w-screen h-screen bg-white">{GameComponent && <GameComponent />}</div>
  );
}