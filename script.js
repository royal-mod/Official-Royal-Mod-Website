let completedSteps = 0;

function startVerification(step) {

    const timer = document.getElementById(`timer${step}`);
    const button = document.querySelector(
        `.card:nth-child(${step}) .verify-btn`
    );

    if (!button || button.disabled) return;

    button.disabled = true;

    let seconds = 10;

    timer.textContent = `Verifying... ${seconds}s`;

    const countdown = setInterval(() => {

        seconds--;

        if (seconds > 0) {
            timer.textContent = `Verifying... ${seconds}s`;
        } else {

            clearInterval(countdown);

            timer.textContent = "✓ Verification complete";

            completeStep(step);
        }

    }, 1000);
}


function completeStep(step) {

    const card = document.querySelector(
        `.card:nth-child(${step})`
    );

    if (card) {
        card.classList.remove("locked");
        card.classList.add("unlocked");
    }

    completedSteps++;

    if (step === 1) {

        const verify2 = document.getElementById("verify2");

        if (verify2) {
            verify2.disabled = false;
        }

    }

    if (step === 2) {

        const verify3 = document.getElementById("verify3");

        if (verify3) {
            verify3.disabled = false;
        }

    }

    if (step === 3) {

        const accessBox = document.getElementById("accessBox");
        const accessBtn = document.getElementById("accessBtn");

        if (accessBox) {
            accessBox.classList.remove("locked");
            accessBox.classList.add("unlocked");
        }

        if (accessBtn) {
            accessBtn.disabled = false;
            accessBtn.textContent = "GET ACCESS";
        }
    }
}


/* ACCESS BUTTON */

document.addEventListener("DOMContentLoaded", () => {

    const accessBtn = document.getElementById("accessBtn");

    if (accessBtn) {

        accessBtn.addEventListener("click", () => {

            if (completedSteps >= 3) {

                window.location.href = "access.html";

            }

        });

    }

});
