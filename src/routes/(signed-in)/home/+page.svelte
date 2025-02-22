<script lang="ts">
    import * as Form from "$lib/components/ui/form/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { formSchema } from "./schema";
    import { superForm } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
    import { toast } from "svelte-sonner";

    let { data } = $props();

    const form = superForm(data.form, {
        validators: zodClient(formSchema),
        onError({ result }) {
            toast.error("エラーが発生しました");
            console.error(result);
        },
        onUpdated({ form }) {
            if (form.valid) {
                toast.success(form.message);
            }
        },
    });

    const { form: formData, enhance } = form;
</script>

<p>home</p>
<form method="POST" use:enhance>
    <Form.Field {form} name="username">
        <Form.Control>
            {#snippet children({ props })}
                <Form.Label>Username</Form.Label>
                <Input {...props} bind:value={$formData.username} />
            {/snippet}
        </Form.Control>
        <Form.Description>This is your public display name.</Form.Description>
        <Form.FieldErrors />
    </Form.Field>
    <Form.Button>Submit</Form.Button>
</form>
