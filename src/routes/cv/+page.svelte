<script lang="ts">
    import {onMount} from "svelte";
    import { createResume } from "$lib/cv/data";
    import { type Resume } from "$lib/cv/types";

    let email = $state("");
    let resume: Resume = createResume("master");
    
    onMount(async () => {
        const { firstName, lastName, emailDomain } = await (await fetch('/api/cv')).json();
        email = `${firstName}.${lastName}@${emailDomain}.com`;
    });
</script>
<svelte:head>
    <title>Ilia Zaitsev CV</title>
</svelte:head>
<div id="resume-content">
<div id="header">
    <h1>Ilia Zaitsev</h1>
    <ul id="contacts">
        <li id="email"><a href="mailto:{email}">E-mail</a></li>
        <li id="linkedin"><a href="https://linkedin.com/in/ilia-zaitsev">LinkedIn</a></li>
        <li id="github"><a href="https://github.com/devforfu">GitHub</a></li>
        <li id="website"><a href="https://iliazaitsev.me">iliazaitsev.me</a></li>
        <li id="location">Hamburg, Germany</li>
    </ul>
</div>
<section id="summary">
    <h2>SUMMARY</h2>
    <div class="splitter"></div>
    {resume.summary}
</section>
<section id="technologies">
    <h2>TECHNOLOGIES</h2>
    <div class="splitter"></div>
    <table>
        <tbody>
        {#each Object.keys(resume.technologies) as key}
        <tr><td><strong>{key}</strong></td><td>{@html resume.technologies[key].join(', ')}</td></tr>
        {/each}
        </tbody>
    </table>
</section>
<h2>WORK EXPERIENCE</h2>
<div class="splitter"></div>
{#each resume.workExperiences as experience}
    {#if experience.job.id === 'smaato'}
        <div class="page-break"></div>
        <div class="page-top-margin"></div>
    {/if}
    <section id="{experience.job.id}" class="career-entry">
        <div class="job">
            <p class="title">{experience.job.title}</p>
            <p class="company">{experience.job.company}</p>
            <p class="dates">{@html experience.job.dates}</p>
        </div>
        <div class="achievements">
            <ul>
                {#each experience.achievements as a}
                    <li>{@html a}</li>
                {/each}
            </ul>
        </div>
    </section>
{/each}
<section id="projects">
    <h2>PROJECTS</h2>
    <div class="splitter"></div>
    {#each resume.projects as project}
    <div class="project">
        <p class="name">{@html project.name}</p>
        <p class="dates">2019&mdash;2024</p>
    </div>
    <div class="description">
        {@html project.descriptionHTML}
    </div>
    {/each}
</section>
<section>
    <h2>EDUCATION AND CERTIFICATIONS</h2>
    <div class="splitter"></div>
    {#each resume.education as educationEntry}
        <div class="education-entry">
            {#if educationEntry.kind === "institution"}
            <p class="provider"><strong>{educationEntry.qualification},</strong> {educationEntry.provider}</p>
            <p class="dates">{@html educationEntry.dates}</p>
            {:else}
            <em>{@html educationEntry.content}</em>
            {/if}
        </div>
    {/each}
</section>
<section>
    <h2>INTERESTS</h2>
    <div class="splitter"></div>
    <article>{@html resume.interests}</article>
</section>
    <div class="not-print">
        <p>Tip: press Ctrl+P or Cmd+P to display a print-ready page (works best in Chrome)</p>
    </div>
</div>
<style>
    @import "../../cv/modern.css";
</style>
