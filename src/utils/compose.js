const compose = (...funcs) => (comp) => {
    return funcs.reduceRight(
        (Wrapped, f) => f(), comp);
};

export default compose;