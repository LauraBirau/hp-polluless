<script lang="js">
	import '../app.css';
</script>

<nav class="w-full lg:w-[65rem] h-20 flex flex-row items-center justify-between gap-4">
	<div class="w-32 h-full flex flex-row items-center justify-start">
		<a href="/" class="w-20 h-20">
			<img src="/logo.png" alt="Logo" class="logo" />
		</a>
	</div>

	<div class="flex w-auto h-full flex-row items-center justify-start gap-2">
		<a href="/about-us" class="inconsolata text-xl brownish">About Us</a>
		<a href="/" aria-label="Home">
			<svg
				class="w-10 h-10 brownish"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					fill-rule="evenodd"
					d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
	</div>
</nav>

<style>
	.limelight-head {
		font-family: Limelight;
		font-style: normal;
		font-variant: small-caps;
		font-weight: 100;
		line-height: 26.4px;
		color: #413620;
	}

	.inconsolata {
		font-family: 'Inconsolata';
	}

	.brownish {
		color: #413620;
	}

	.brownish:hover {
		color: #52462e;
	}
</style>
