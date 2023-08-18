<script lang="ts">
	export let checked = false;
	export let onChange: (checked: boolean) => void = () => {};
	export let text = '';
</script>

<label>
	<input type="checkbox" bind:checked on:change={() => onChange?.(checked)} />
	<slot />
	{text}
</label>

<style lang="scss">
	label {
		display: flex;
		align-items: center;
		gap: 0.5em;
        user-select: none;
	}

	input {
		appearance: none;
		background-color: #333;
		border-radius: 0.2em;
		font-size: 1em;
		width: 13px;
		height: 13px;
		margin: 0;
		padding: 0;
		border: none;
		cursor: pointer;
		position: relative;
		outline: 1px solid #aaa3;

		&::before {
			content: '';
			position: absolute;
			background-color: rgb(63, 187, 236);
			top: 2px;
			left: 2px;
			right: 2px;
			bottom: 2px;
			transform: scale(0);
			opacity: 0;
			transition: 120ms transform ease, 120ms opacity ease;
			border-radius: 0.15em;
		}

		&:checked::before {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
