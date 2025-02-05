import { Observable } from '@nativescript/core';
import { Question } from '../models/quiz';
import { questions } from '../data/questions';

export class QuizViewModel extends Observable {
  private _currentQuestionIndex: number = 0;
  private _score: number = 0;
  private _questions: Question[] = [];
  private _canAnswer: boolean = true;
  private _showScore: boolean = false;

  constructor(categoryId: string) {
    super();
    
    // Filtrer les questions par catégorie
    this._questions = questions.filter(q => q.category === categoryId);
    
    this.updateCurrentQuestion();
    this.set('totalQuestions', this._questions.length);
    this.set('score', this._score);
    this.set('canAnswer', this._canAnswer);
    this.set('showScore', this._showScore);
  }

  get currentQuestion(): Question {
    return this._questions[this._currentQuestionIndex];
  }

  get currentQuestionIndex(): number {
    return this._currentQuestionIndex;
  }

  get progressText(): string {
    return `Question ${this._currentQuestionIndex + 1}/${this._questions.length}`;
  }

  getOptionClass(index: number): string {
    const baseClass = 'text-lg p-4 rounded-lg w-full ';
    if (!this._canAnswer) {
      if (index === this.currentQuestion.correctAnswer) {
        return baseClass + 'bg-green-500 text-white';
      }
      return baseClass + 'bg-gray-200';
    }
    return baseClass + 'bg-purple-100 active:bg-purple-200';
  }

  onAnswerTap(args: EventData): void {
    if (!this._canAnswer) return;

    const button = args.object;
    const selectedIndex = this.currentQuestion.options.indexOf(button.text);
    
    this._canAnswer = false;
    this.set('canAnswer', false);

    if (selectedIndex === this.currentQuestion.correctAnswer) {
      this._score++;
      this.set('score', this._score);
    }

    // Attendre un peu avant de passer à la question suivante
    setTimeout(() => {
      if (this._currentQuestionIndex < this._questions.length - 1) {
        this._currentQuestionIndex++;
        this._canAnswer = true;
        this.updateCurrentQuestion();
      } else {
        this.showFinalScore();
      }
    }, 1000);
  }

  private updateCurrentQuestion(): void {
    this.set('currentQuestion', this.currentQuestion);
    this.set('currentQuestionIndex', this._currentQuestionIndex);
    this.set('progressText', this.progressText);
    this.set('canAnswer', this._canAnswer);
  }

  private showFinalScore(): void {
    this._showScore = true;
    this.set('showScore', true);
  }

  onBackToMenu(): void {
    // Retourner à la page principale
    const frame = require('@nativescript/core').Frame;
    frame.goBack();
  }
}