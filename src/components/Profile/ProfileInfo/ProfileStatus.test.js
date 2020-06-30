import React from "react"
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={"test status"}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("test status");
    })
    test("after creation span should exist in the component", () => {
        const component = create(<ProfileStatus status={"test status"}/>);
        const root = component.root;
        expect(root.findByType("span")).not.toBeNull();
    })
    test("after creation span should display correct status", () => {
        const component = create(<ProfileStatus status={"test status"}/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("test status");
    })
    test("input should not exist in the component right after creation", () => {
        const component = create(<ProfileStatus status={"test status"}/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input")
        }).toThrow();
    })
    test("input should be displayed instead of span after double click", () => {
        const component = create(<ProfileStatus status={"test status"}/>);
        const root = component.root;

        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("test status")
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={"test status"} updateProfileStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.disableEditMode();
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})