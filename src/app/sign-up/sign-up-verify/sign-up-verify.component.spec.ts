import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SignUpVerifyComponent } from "./sign-up-verify.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SignUpVerifyComponent", () => {

  let fixture: ComponentFixture<SignUpVerifyComponent>;
  let component: SignUpVerifyComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SignUpVerifyComponent]
    });

    fixture = TestBed.createComponent(SignUpVerifyComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
