# Team contact and profile links

Checked on 17 September 2026. These sources support the corrections to
`content/authors/*/_index.md`; use them when updating a person's links.
Names in a URL alone do not confirm that an account belongs to that person.

| Person | Corrections | Source |
| --- | --- | --- |
| Borja Calvo | Email `borja.calvo@ehu.eus`, Scholar ID `m6cU3xkAAAAJ`, GitHub `b0rxa` | [EHU profile](https://ekoizpen-zientifikoa.ehu.eus/investigadores/128874/detalle), [personal website](https://b0rxa.github.io/) |
| Andoni Mujika | Scholar ID `PK8JNBwAAAAJ` | [EHU profile](https://ekoizpen-zientifikoa.ehu.eus/investigadores/129411/detalle) |
| Inigo Lopez-Gazpio | Scholar ID `-gVoBIsAAAAJ` | [personal website](https://inigolopezgazpio.net/) |
| Igor Rodríguez | Scholar ID `pt4hFYcAAAAJ` | [EHU profile](https://ekoizpen-zientifikoa.ehu.eus/investigadores/129882/detalle) |
| Eneko Atxa | Scholar ID `SRfOOxoAAAAJ`, GitHub `Enekoassets` | [academic website](https://enekoassets.github.io/academic.html) |
| Elsa Fernández | Replaced the placeholder Scholar link with her EHU staff page | [EHU staff profile](https://www.ehu.eus/es/web/graduak/grado-ingenieria-informatica/profesorado?idPdi=69719&redirect=fichaPDI) |
| Unai Elordi | Email `unai.elordi@ehu.eus`; LinkedIn now points to LinkedIn | [EHU teaching record](https://www.ehu.eus/en/web/graduak/bachelors-degree-artificial-intelligence/credits-and-subjects?anyo-academico=20250&idPdi=472436&redirect=consultaTutorias), [personal website](https://uelordi01.github.io/) |

The existing GitHub links `amujika` (Andoni), `elsafernandez` (Elsa), and
`igorrodriguez` (Igor) remain pending owner confirmation. The accounts exist,
but their public profiles do not establish that they belong to these researchers.

The Contact page offers separate email links for Inigo, Unai, and Andoni.
Social links are rendered by `layouts/partials/social_links.html`, which gives
each icon a descriptive accessible name and exposes the links to screen readers.
The author biography override in `layouts/partials/blocks/v1/about.html` reuses
that partial while retaining the theme's larger icons on individual profiles.
