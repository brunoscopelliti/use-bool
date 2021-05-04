type SetState = () => void;

declare const useBool : (initialValue ?: boolean) => [boolean, SetState, SetState];

export default useBool;
