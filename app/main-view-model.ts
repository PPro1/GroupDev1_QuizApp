import { Observable, Frame } from '@nativescript/core';
import { categories } from './data/categories';

export class MainViewModel extends Observable {
  constructor() {
    super();
    this.set('categories', categories);
  }

  onCategoryTap(args: any): void {
    const category = args.object.bindingContext;
    const frame = Frame.topmost();
    frame.navigate({
      moduleName: 'views/quiz-page',
      context: {
        categoryId: category.id
      }
    });
  }
}