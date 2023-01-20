/// <reference types="vite/client" />

type Dog = {
	id: number;
	photo: string;
};

type headerProps = { score: number; highScore: number };

type memGameProps = {
	dogs: Dog[];
	onClick: MouseEventHandler;
};
