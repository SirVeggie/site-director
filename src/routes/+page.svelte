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

<Main>
	<h1>Site Director</h1>
	<p>App that allows opening any(?) site from a mobile homescreen in fullscreen mode</p>
	<br />
	<p>How to use?</p>
	<p class="step">1) Go to /[id], where [id] is anything you want (example: {$page.url.host}/manga)</p>
	<p class="step">2) Add page to homescreen</p>
	<p class="step">3) Set target url (including https:// etc)</p>
	<br />
	<p class="info">> Step 3 can be done inside the current browser or after opening from the homescreen</p>
	<p class="info">> After url has been set, the app will automatically redirect to that url while keeping fullscreen (depending on used browser)</p>
	<p class="info">> To clear the target url, make a new id or clear an existing id by navigating to /[id]/clear ({$page.url.host}/manga/clear)</p>
</Main>

<style lang="scss">
	h1 {
		margin: 0;
		font-family: 'Open sans', sans-serif;
		font-size: 1.5rem;
		color: #ddd;
		margin-bottom: 2vh;
	}
	
	p {
		margin: 0;
	}
	
	.step {
		margin-left: 15px;
	}
	
	.info {
		color: #aaa;
		font-size: 15px;
	}
</style>
