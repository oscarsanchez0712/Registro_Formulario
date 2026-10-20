import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('debería crear la aplicación', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('el patrón de código acepta EST-123456 y rechaza otros formatos', () => {
    const app = TestBed.createComponent(AppComponent).componentInstance;
    const re = new RegExp(app.patronCodigo);
    expect(re.test('EST-123456')).toBeTrue();
    expect(re.test('EST-12345')).toBeFalse();
    expect(re.test('est-123456')).toBeFalse();
    expect(re.test('123456')).toBeFalse();
  });

  it('el patrón de email exige dominio válido', () => {
    const app = TestBed.createComponent(AppComponent).componentInstance;
    const re = new RegExp(app.patronEmail);
    expect(re.test('ana@correo.com')).toBeTrue();
    expect(re.test('ana@correo')).toBeFalse();
    expect(re.test('ana@.com')).toBeFalse();
  });

  it('inicia con la lista vacía y sin indicadores', () => {
    const app = TestBed.createComponent(AppComponent).componentInstance;
    expect(app.total).toBe(0);
    expect(app.totalManana).toBe(0);
    expect(app.totalNoche).toBe(0);
  });
});
