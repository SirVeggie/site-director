<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		localStorage.removeItem(`targetUrl:${$page.params['id']}`);
		goto(`/${$page.params['id']}`);
	});
</script>
