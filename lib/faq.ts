export interface FaqItem {
  question: string;
  answer: string;
}

export const generalFaqs: FaqItem[] = [
  {
    question: "Comment se déroule la première consultation au GHRMSA ?",
    answer: "Diagnostic approfondi au pôle hospitalier, analyse imagerie et définition de la stratégie chirurgicale."
  },
  {
    question: "Dents de sagesse : est-ce douloureux ?",
    answer: "Intervention sous anesthésie hospitalière sécurisée, protocoles antalgiques modernes pour un confort total."
  },
  {
    question: "Où se déroulent les interventions ?",
    answer: "Exclusivement au bloc opératoire du GHRMSA pour une sécurité anesthésique et chirurgicale maximale."
  },
];
