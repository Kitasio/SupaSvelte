<script context="module">
	import { supabase } from '$lib/utils';

	export async function load({ params }) {
		const { data, error } = await supabase.from('people').select().eq('id', params.id);

		try {
			return {
				props: {
					person: data[0]
				}
			};
		} catch {
			return {
				status: 301,
				redirect: '/'
			};
		}
	}
</script>

<script>
	export let person;
</script>

<div>
	<h2>Name: {person.name}</h2>
	<h3>Age: {person.age}</h3>
</div>
