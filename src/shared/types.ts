export enum SelectedPage {
  Início = "início",
  História = "história",
  Modalidades = "modalidades",
  Horários = "horários",
  Preçário = "preçário",
  Contactos = "contactos",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
