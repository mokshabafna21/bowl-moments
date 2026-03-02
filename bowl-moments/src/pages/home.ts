export function renderHome(container: HTMLElement) {
    container.innerHTML = `
        <main class="coming-soon container">
            <div class="card">
                <h1>Bowl Moments</h1>
                <p class="tagline">Healthy bowls for students, busy people, and anyone recovering their health through better food.</p>

                <p class="about">Hi — I'm a BBA student who started Bowl Moments after facing health issues caused by a poor diet. I'm preparing tasty, balanced bowls to help others feel better — launching soon from my PG.</p>

                <form id="signup-form" class="signup">
                    <label for="email">Get launch updates</label>
                    <input id="email" type="email" placeholder="you@example.com" required />
                    <button type="submit">Notify Me</button>
                    <p id="signup-message" class="signup-message" aria-live="polite"></p>
                </form>

                <p class="small">Follow us on social media for progress and specials.</p>
            </div>
        </main>
    `;

    const form = container.querySelector<HTMLFormElement>('#signup-form');
    const message = container.querySelector<HTMLElement>('#signup-message');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector<HTMLInputElement>('#email');
            const email = input?.value.trim();
            if (!email) return;
            try {
                const list = JSON.parse(localStorage.getItem('bowl_signups') || '[]');
                list.push({ email, date: new Date().toISOString() });
                localStorage.setItem('bowl_signups', JSON.stringify(list));
                if (message) message.textContent = 'Thanks! You will be notified.';
                form.reset();
            } catch (err) {
                if (message) message.textContent = 'Unable to save — please try again.';
            }
        });
    }
}