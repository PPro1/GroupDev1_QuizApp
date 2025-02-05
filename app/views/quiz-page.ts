import { EventData, NavigatedData, Page } from '@nativescript/core';
import { QuizViewModel } from './quiz-view-model';

export function navigatingTo(args: NavigatedData) {
  const page = <Page>args.object;
  const categoryId = args.context.categoryId;
  page.bindingContext = new QuizViewModel(categoryId);
}