export function initBackgroundToggle() {
    const contrastButton = document.getElementById('contrast');
    const sectionElements = document.querySelectorAll('section');

    let state = {
        active: 0,
    };

    let bgProps = [
        '--container-fill-grayscale-default',
        '--container-fill-grayscale-1',
        '--container-fill-grayscale-2',
        '--container-fill-primary-default',
        '--container-fill-primary-brand',
        '--container-fill-primary-1',
        '--container-fill-primary-2',
        '--container-fill-primary-3',
        '--container-fill-secondary-default',
        '--container-fill-secondary-brand',
        '--container-fill-secondary-1',
        '--container-fill-secondary-2',
        '--container-fill-secondary-3',
        '--container-fill-secondary-4',
        '--container-fill-tertiary-default',
        '--container-fill-tertiary-brand',
        '--container-fill-tertiary-1',
    ];

    for (let i = 0; i < sectionElements.length; i++) {
        sectionElements[i].classList.add(bgProps[state.active]);
    }

    contrastButton.addEventListener('click', (e) => {
        let prevActive = state.active;
        state.active = state.active < bgProps.length - 1 ? state.active + 1 : 0;

        for (let i = 0; i < sectionElements.length; i++) {
            if (sectionElements[i].classList.length !== 0) {
                sectionElements[i].classList.replace(bgProps[prevActive], bgProps[state.active]);
            } else {
                sectionElements[i].classList.add(bgProps[state.active]);
            }
        }
    });
}
