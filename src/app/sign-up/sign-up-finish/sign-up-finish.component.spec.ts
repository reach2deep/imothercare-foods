import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SignUpFinishComponent } from "./sign-up-finish.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SignUpFinishComponent", () => {

  let fixture: ComponentFixture<SignUpFinishComponent>;
  let component: SignUpFinishComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SignUpFinishComponent]
    });

    fixture = TestBed.createComponent(SignUpFinishComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
