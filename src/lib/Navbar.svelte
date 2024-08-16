<script>
	export let transparent = true;
</script>

<nav
	class=" {transparent ? 'text-white' : 'text-dark'} fixed z-50 w-screen py-6"
	class:transparent-nav={transparent}
>
	<a href="/" class="nav-item">Home</a>
	<a href="/services" class="nav-item">Services</a>
	<a href="/discord-url" class="nav-item flex items-center gap-3">
		<img src="/discord.svg" alt="Discord logo" class="h-5 w-5" />
		<span>Discord</span>
	</a>
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.nav-item {
		margin: 0 1rem;
		font-size: 1.2rem;
	}

	.transparent-nav {
		backdrop-filter: blur(3px);
		background-color: rgba(1, 1, 1, 0.2);
	}
</style>
