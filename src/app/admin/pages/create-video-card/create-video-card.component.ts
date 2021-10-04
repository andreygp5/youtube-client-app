import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import { ICustomVideo } from '../../../shared/models/interfaces/custom.video.interface';
import { customVideosProcessVideos } from '../../../store/actions/custom-videos.actions';
import { SnackbarService } from '../../../core/services/snackbar.service';

@Component({
  selector: 'app-create-video-card',
  templateUrl: './create-video-card.component.html',
  styleUrls: ['./create-video-card.component.scss'],
})
export class CreateVideoCardComponent implements OnInit, OnDestroy {
  public titleFormName: string = 'title';
  public descriptionFormName: string = 'description';
  public imageLinkFormName: string = 'imageLink';
  public videoLinkFormName: string = 'videoLink';

  public form: FormGroup = new FormGroup({
    [this.titleFormName]: new FormControl('', [Validators.required]),
    [this.descriptionFormName]: new FormControl('', [Validators.required]),
    [this.imageLinkFormName]: new FormControl('', [Validators.required]),
    [this.videoLinkFormName]: new FormControl('', [Validators.required]),
  });
  public isSubmitButtonDisabled: boolean = true;
  @ViewChild(FormGroupDirective) createForm: FormGroupDirective | undefined;

  private valueChangesSubscription: Subscription | undefined;

  constructor(
    private store: Store,
    private snackbarService: SnackbarService,
  ) {
  }

  ngOnInit(): void {
    this.subscribeToValueChanges();
  }

  public createVideo(): void {
    if (!this.form.valid) {
      return;
    }

    const currentTimeInMs: string = String(moment.now());
    const title: string = this.form.get(this.titleFormName)?.value;

    const customVideo: ICustomVideo = {
      id: currentTimeInMs,
      title,
      description: this.form.get(this.descriptionFormName)?.value,
      imageLink: this.form.get(this.imageLinkFormName)?.value,
      videoLink: this.form.get(this.videoLinkFormName)?.value,
      publishedAt: currentTimeInMs,
    };

    this.store.dispatch(customVideosProcessVideos({ customVideos: [customVideo] }));
    this.snackbarService.showMsg(`Card ${title} added successfully`);
    this.resetForm();
  }

  public ngOnDestroy(): void {
    this.unsubscribeFromValueChanges();
  }

  private resetForm(): void {
    this.form.reset();
    this.createForm?.resetForm();
  }

  private subscribeToValueChanges(): void {
    this.valueChangesSubscription = this.form.valueChanges.subscribe(() => {
      this.isSubmitButtonDisabled = !this.form.valid;
    });
  }

  private unsubscribeFromValueChanges(): void {
    this.valueChangesSubscription?.unsubscribe();
  }
}
