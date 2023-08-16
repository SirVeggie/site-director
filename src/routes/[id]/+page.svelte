<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import Main from '$lib/components/Main.svelte';
	import { onMount } from 'svelte';

	let value = '';
	let target = '';

	function enter(e: KeyboardEvent) {
		if (e.key !== 'Enter') return;
		set();
	}

	function set() {
		target = value;
		localStorage.setItem('targetUrl', value);
	}

	onMount(() => {
		const url = localStorage.getItem('targetUrl');
		if (url) {
			window.location.href = url;
		}
	});
</script>

<svelte:head>
    <title>Director - {$page.params["id"]}</title>
</svelte:head>

<Main>
	<div class="id"><span>id:</span> {$page.params["id"]}</div>
	<h1>Set target url</h1>
	<Input bind:value on:keydown={enter} />
	<br />
	<Button on:click={set}>Save</Button>
	<div class="target">Current target: {target}</div>
	<div class="info">
		> Clear the target url by navigating to
		<span>/clear</span>
		in the browser
		<br />
		> This is a helper tool to open websites in fullscreen on mobile
		<br />
		> Site automatically redirects to the target url on refresh until cleared
	</div>
</Main>

<style lang="scss">
	h1 {
		margin: 0;
		font-family: 'Open sans', sans-serif;
		font-size: 1.5rem;
		color: #ddd;
		margin-bottom: 2vh;
	}
	
	.id {
		position: absolute;
		top: 9px;
		
		span {
			color: #888;
		}
	}

	.target {
		margin-top: 3rem;
	}

	.info {
		margin-top: 2rem;
		color: #aaa;
		font-size: 14px;

		span {
			color: #ddd;
		}
		
		br {
			display: block;
			content: '';
			margin-top: 0.5rem;
		}
	}
</style>
