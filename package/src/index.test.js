import { renderHook, act } from "@testing-library/react-hooks";
import useBool from "./";

describe("useBool", () => {
  it("returns `false` as default state", () => {
    const { result } = renderHook(() => useBool());

    const [state] = result.current;

    expect(state).toBe(false);
  });

  it("returns the state, and the handler to change it", () => {
    let state, makeTrue, makeFalse;

    renderHook(
      () => {
        [state, makeTrue, makeFalse] = useBool(true);
      }
    );

    expect(state).toBe(true);

    act(makeFalse);

    expect(state).toBe(false);

    act(makeTrue);

    expect(state).toBe(true);

    act(makeTrue);

    expect(state).toBe(true);
  });
});
