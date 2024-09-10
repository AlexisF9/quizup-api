import type { Schema, Attribute } from '@strapi/strapi';

export interface QuizQuestion extends Schema.Component {
  collectionName: 'components_propo_questions';
  info: {
    displayName: 'Questions';
    icon: 'question';
    description: '';
  };
  attributes: {
    question: Attribute.String;
    proposals: Attribute.Component<'quiz.proposal', true>;
    answer: Attribute.String;
  };
}

export interface QuizProposal extends Schema.Component {
  collectionName: 'components_quiz_proposals';
  info: {
    displayName: 'Proposal';
    icon: 'bulletList';
  };
  attributes: {
    proposal: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'quiz.question': QuizQuestion;
      'quiz.proposal': QuizProposal;
    }
  }
}
