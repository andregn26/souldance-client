export enum SelectedPage {
  Início = "início",
  Serviços = "serviços",
  História = "história",
  Modalidades = "modalidades",
  Horários = "horários",
  Preçário = "preçário",
  Contactos = "contactos",
}

export interface BenefitType {
  index: Number;
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}

export interface ProfessorType {
  name: string;
  modality?: string;
  image?: string;
}
