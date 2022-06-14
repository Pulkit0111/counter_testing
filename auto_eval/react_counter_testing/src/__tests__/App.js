import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen} from "@testing-library/react";
import App from "../App";

describe("Testing Counter Application", () => {
    global.score=0;
    console.log("Resetting score to 0");
    describe("App component should render", () => {
        beforeEach(() => {
            render(<App />);
        });
        it("Should have the counter app and header",async()=>{
            expect(screen.getByTestId("counter-app")).toBeInTheDocument();
            expect(screen.getByTestId("app-header")).toBeInTheDocument();
            global.score+=1;
        });
        it("should have the required text in header",async()=>{
            expect(screen.getByTestId("app-header")).toHaveTextContent("This is a simple counter App.");
            global.score+=1;
        });
        it("should have the counter component and required text",async()=>{
            expect(screen.getByTestId("counter")).toBeInTheDocument();
            expect(screen.getByTestId("counter")).toHaveTextContent(0);
            global.score+=2;
        });
        it("should have the Increment & Decrement Button",async()=>{
            expect(screen.getByTestId("increment-button")).toBeInTheDocument();
            expect(screen.getByTestId("decrement-button")).toBeInTheDocument();
            global.score+=2;
        });
        it("should increment the counter on clicking on increment button",async()=>{
            fireEvent.click(screen.getByTestId("increment-button"));
            fireEvent.click(screen.getByTestId("increment-button"));
            fireEvent.click(screen.getByTestId("increment-button"));
            fireEvent.click(screen.getByTestId("increment-button"));
            expect(screen.getByTestId("counter")).toHaveTextContent(4);
            global.score+=2;
        });
        it("should decrement the counter on clicking on decrement button",async()=>{
            fireEvent.click(screen.getByTestId("decrement-button"));
            fireEvent.click(screen.getByTestId("decrement-button"));
            fireEvent.click(screen.getByTestId("decrement-button"));
            fireEvent.click(screen.getByTestId("decrement-button"));
            expect(screen.getByTestId("counter")).toHaveTextContent(0);
            global.score+=2;
        });
    }); 
    afterAll(() => {
        console.log("Final Score is", global.score);
    });
});