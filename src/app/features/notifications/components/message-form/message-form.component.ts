import { Component, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';
import { NotificationCategory } from '../../models/notification.dto';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { AlertComponent } from '../../../../shared/ui/alert/alert.component';

@Component({
  selector: 'app-message-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, AlertComponent],
  templateUrl: './message-form.component.html'
})
export class MessageFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly notificationService = inject(NotificationService);

  @Output() submitSuccess = new EventEmitter<void>();

  messageForm: FormGroup;
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';
  showSuccess = false;
  showError = false;

  categories: Array<{ value: NotificationCategory; label: string }> = [
    { value: NotificationCategory.SPORTS, label: 'Sports' },
    { value: NotificationCategory.FINANCE, label: 'Finance' },
    { value: NotificationCategory.MOVIES, label: 'Movies' }
  ];

  constructor() {
    this.messageForm = this.fb.group({
      category: ['', Validators.required],
      content: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  get categoryControl() {
    return this.messageForm.get('category');
  }

  get messageControl() {
    return this.messageForm.get('content');
  }

  onSubmit(): void {
    if (this.messageForm.invalid) {
      this.messageForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.showSuccess = false;
    this.showError = false;

    this.notificationService.createNotification(this.messageForm.value).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.showSuccess = true;
        this.successMessage = 'Notification submitted successfully!';
        this.messageForm.reset();
        this.submitSuccess.emit();
        
        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.showError = true;
        this.errorMessage = error.message || 'Failed to submit notification. Please try again.';
        
        setTimeout(() => {
          this.showError = false;
        }, 5000);
      }
    });
  }
}
