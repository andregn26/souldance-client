import { BenefitType } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
export const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon />,
    title: "Aulas de Dança",
    description: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere odio ex, sed feugiat lorem tristique nec. Proin id laoreet turpis. Mauris tincidunt vel mi euismod facilisis. Curabitur fermentum, dolor et vestibulum semper, velit lorem tincidunt risus. `,
  },
  {
    icon: <UserGroupIcon />,
    title: "Aulas para Noivos",
    description: `
Um dos momentos mais marcantes de um casamento é aquele no qual o casal expressa o seu amor e felicidade através da dança. Para que esse instante seja inesquecível, será melhor coreografar os passos a serem dados com uma equipa profissional, criativa e dedicada.`,
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Eventos Corporativos",
    description: `
Fortalecer ou criar laços num Team Building ou dar um toque de magia e glamour a festas temáticas - Conheça as variadas formas de utilizar a dança como uma forma de agregar valor a eventos corporativos e cativar a sua audiência. Conheça as nossas ofertas!`,
  },
];
