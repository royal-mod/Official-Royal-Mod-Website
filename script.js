let completedSteps = 0;


/* =========================================
   SUBSCRIBE / FOLLOW BUTTON CLICK
   ========================================= */

function unlockVerify(step) {

    const verifyButton = document.getElementById(`verify${step}`);

    if (!verifyButton) return;

    /*
     * User has clicked the Subscribe/Follow link.
     * Now the VERIFY button becomes available.
     */

    verifyButton.disabled = false;

    verifyButton.classList.add("ready");

    const timer = document.getElementById(`timer${step}`);

    if (timer) {
        timer.textContent = "Ready to verify";
    }
}


/* =========================================
   VERIFICATION TIMER
   ========================================= */

function startVerification(step) {

    const verifyButton =
        document.getElementById(`verify${step}`);

    const timer =
        document.getElementById(`timer${step}`);

    if (!verifyButton || verifyButton.disabled) {
        return;
    }

    verifyButton.disabled = true;

    let seconds = 10;

    timer.textContent =
        `Verifying... ${seconds}s`;


    const countdown = setInterval(() => {

        seconds--;

        if (seconds > 0) {

            timer.textContent =
                `Verifying... ${seconds}s`;

        } else {

            clearInterval(countdown);

            timer.textContent =
                "✓ Verification complete";

            completeStep(step);
        }

    }, 1000);
}


/* =========================================
   STEP COMPLETION
   ========================================= */

function completeStep(step) {

    const card =
        document.getElementById(`step${step}`);

    if (card) {

        card.classList.remove("locked");

        card.classList.add("unlocked");
    }


    completedSteps++;


    /* STEP 1 → UNLOCK STEP 2 */

    if (step === 1) {

        const step2 =
            document.getElementById("step2");

        const subscribe2 =
            document.getElementById("subscribe2");

        const verify2 =
            document.getElementById("verify2");


        step2.classList.remove("locked");

        step2.classList.add("unlocked");


        subscribe2.classList.remove("disabled-link");

        subscribe2.removeAttribute("aria-disabled");

        subscribe2.onclick = function () {
            unlockVerify(2);
        };


        /*
         * Verify stays disabled until
         * Subscribe is clicked.
         */

        verify2.disabled = true;
    }


    /* STEP 2 → UNLOCK STEP 3 */

    if (step === 2) {

        const step3 =
            document.getElementById("step3");

        const follow3 =
            document.getElementById("follow3");

        const verify3 =
            document.getElementById("verify3");


        step3.classList.remove("locked");

        step3.classList.add("unlocked");


        follow3.classList.remove("disabled-link");

        follow3.removeAttribute("aria-disabled");

        follow3.onclick = function () {
            unlockVerify(3);
        };


        /*
         * Verify stays disabled until
         * Instagram Follow is clicked.
         */

        verify3.disabled = true;
    }


    /* STEP 3 → UNLOCK ACCESS */

    if (step === 3) {

        const accessBox =
            document.getElementById("accessBox");

        const accessBtn =
            document.getElementById("accessBtn");


        accessBox.classList.remove("locked");

        accessBox.classList.add("unlocked");


        accessBtn.disabled = false;

        accessBtn.textContent =
            "GET ACCESS";
    }
}


/* =========================================
   GET ACCESS
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const accessBtn =
        document.getElementById("accessBtn");


    accessBtn.addEventListener("click", () => {

        if (completedSteps >= 3) {

            window.location.href =
                "access.html";
        }

    });

});
