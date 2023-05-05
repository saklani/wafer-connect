<script>
    /** @type {string} */
    let backgroundColor = "#000000";

    /** @type {string} */
    let color = "#FFFFFF";

    /** @type {string} */
    let hoverColor = "#191919";

    /** @type {string} */
    let height = "42px";

    /** @type {string} */
    let width = "100%";

    /** @type {string} */
    let borderRadius = "2px";

    /** @type {string} */
    let border = "none";

    /** @type { MouseEventHandler<T> | undefined | null} */
    let handleClick;

    let _color = color;

    export { backgroundColor, borderRadius, color, handleClick, height, width };
</script>

<button
    style="background-color: {backgroundColor}; color: {_color}; height: {height}; width: {width}; border: {border}; border-radius: {borderRadius}; cursor: pointer;"
    on:mouseenter={() => (_color = hoverColor)}
    on:mouseleave={() => (_color = color)}
    on:click={handleClick}
>
    <slot />
</button>
