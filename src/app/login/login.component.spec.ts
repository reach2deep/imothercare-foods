import { NO_ERRORS_SCHEMA } from "@angular/core";
import { LoginComponent } from "./login.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("LoginComponent", () => {

  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [LoginComponent]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
