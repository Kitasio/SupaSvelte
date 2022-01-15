<script context="module">
	import { supabase } from '$lib/utils';

	export async function load() {
		const { data, error } = await supabase.from('people').select();

		if (!error) {
			return {
				props: {
					people: data
				}
			};
		}
	}
</script>

<script>
	export let people;

	let name;
	let age;

	const submit = async () => {
		await supabase.from('people').insert([{ name: name, age: age }]);
		const { data, error } = await supabase.from('people').select();
		people = data;
	};
</script>


<h1>Supabase minimal setup</h1>

<div>
	{#each people as p (p.id)}
		<div>
			<a sveltekit:prefetch href="/{p.id}">Person with id: {p.id}</a>
		</div>
	{/each}
</div>

<div>
	<input bind:value={name} type="text" placeholder="name" />
	<input bind:value={age} type="text" placeholder="age" />
	<button on:click={submit}>click</button>
</div>
