import { Injectable } from '@angular/core';
import type { ToastMessage } from './public-api';

@Injectable({
  providedIn: 'root',
})
export class ToastManager {
  public addMessage(msg: ToastMessage): void {
    const toast: HTMLElement & {
      componentOnReady: () => Promise<void>;
      addMessage(msg: ToastMessage): Promise<void>;
    } = document.querySelector('p-toast,[p-toast]');
    customElements.whenDefined(toast.tagName.toLowerCase()).then(() => {
      toast.componentOnReady().then(() => toast.addMessage(msg));
    });
  }
}
