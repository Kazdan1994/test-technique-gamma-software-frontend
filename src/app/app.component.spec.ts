import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MessageService } from 'primeng/api';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [AppModule],
      providers: [MessageService],
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should upload an excel file', () => {
    spyOn(messageService, 'add');

    const mockEvent: any = {
      files: [
        {
          name: 'test.xlsx',
          size: 1234,
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        },
      ],
    };

    app.onUpload(mockEvent);

    expect(messageService.add).toHaveBeenCalledWith({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded and data stored in database',
    });
  });
});
