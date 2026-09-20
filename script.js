/* =========================================
   ROYAL MOD ACCESS SYSTEM
========================================= */


/* =========================================
   SAVE PROGRESS
========================================= */

function saveProgress(key, value) {

    localStorage.setItem(
        "royalmod_" + key,
        value
    );

}


/* =========================================
   GET PROGRESS
========================================= */

function getProgress(key) {

    return localStorage.getItem(
        "royalmod_" + key
    );

}


/* =========================================
   HANDLE SUBSCRIBE / FOLLOW
========================================= */

function handleAction(step) {

    /*
       Save that the user clicked the
       Subscribe / Follow button.

       The external website will open,
       but progress remains saved.
    */

    saveProgress(
        "action" + step,
        "clicked"
    );

}


/* =========================================
   ENABLE VERIFY BUTTON
========================================= */

function enableVerify(step) {

    const button =
        document.getElementById(
            "verify" + step
        );

    if (!button) return;

    button.disabled = false;

    button.classList.add("ready");

}


/* =========================================
   UNLOCK STEP
========================================= */

function unlockStep(step) {

    const card =
        document.getElementById(
            "step" + step
        );

    if (!card) return;

    card.classList.remove(
        "locked"
    );

    card.classList.add(
        "unlocked"
    );


    /* STEP 2 */

    if (step === 2) {

        const subscribe2 =
            document.getElementById(
                "subscribe2"
            );

        subscribe2.classList.remove(
            "disabled-link"
        );

        subscribe2.style.pointerEvents =
            "auto";

        subscribe2.removeAttribute(
            "aria-disabled"
        );

        enableVerify(2);
    }


    /* STEP 3 */

    if (step === 3) {

        const follow3 =
            document.getElementById(
                "follow3"
            );

        follow3.classList.remove(
            "disabled-link"
        );

        follow3.style.pointerEvents =
            "auto";

        follow3.removeAttribute(
            "aria-disabled"
        );

        enableVerify(3);
    }

}


/* =========================================
   COMPLETE STEP
========================================= */

function completeStep(step) {

    saveProgress(
        "completed" + step,
        "yes"
    );


    const card =
        document.getElementById(
            "step" + step
        );

    if (card) {

        card.classList.remove(
            "locked"
        );

        card.classList.add(
            "unlocked"
        );

    }


    /* STEP 1 COMPLETE */

    if (step === 1) {

        unlockStep(2);

    }


    /* STEP 2 COMPLETE */

    if (step === 2) {

        unlockStep(3);

    }


    /* STEP 3 COMPLETE */

    if (step === 3) {

        const accessBox =
            document.getElementById(
                "accessBox"
            );

        const accessBtn =
            document.getElementById(
                "accessBtn"
            );


        accessBox.classList.remove(
            "locked"
        );

        accessBox.classList.add(
            "unlocked"
        );


        accessBtn.disabled =
            false;

    }

}


/* =========================================
   10 SECOND VERIFICATION
========================================= */

function startVerification(step) {

    const button =
        document.getElementById(
            "verify" + step
        );

    const timer =
        document.getElementById(
            "timer" + step
        );


    if (!button || button.disabled) {

        return;

    }


    button.disabled =
        true;

    button.classList.remove(
        "ready"
    );


    let seconds = 10;


    timer.textContent =
        "Verifying... " +
        seconds +
        "s";


    const countdown =
        setInterval(() => {

            seconds--;


            if (seconds > 0) {

                timer.textContent =
                    "Verifying... " +
                    seconds +
                    "s";

            }


            else {

                clearInterval(
                    countdown
                );


                timer.textContent =
                    "✓ Verification complete";


                completeStep(
                    step
                );

            }

        }, 1000);

}


/* =========================================
   RESTORE PROGRESS
========================================= */

function restoreProgress() {


    /* -------------------------------------
       STEP 1
    ------------------------------------- */

    if (
        getProgress("action1") ===
        "clicked"
    ) {

        enableVerify(1);

        const timer =
            document.getElementById(
                "timer1"
            );

        if (timer) {

            timer.textContent =
                "Ready to verify";

        }

    }


    if (
        getProgress("completed1") ===
        "yes"
    ) {

        completeStepWithoutSaving(1);

    }


    /* -------------------------------------
       STEP 2
    ------------------------------------- */

    if (
        getProgress("action2") ===
        "clicked"
    ) {

        enableVerify(2);

        const timer =
            document.getElementById(
                "timer2"
            );

        if (timer) {

            timer.textContent =
                "Ready to verify";

        }

    }


    if (
        getProgress("completed2") ===
        "yes"
    ) {

        completeStepWithoutSaving(2);

    }


    /* -------------------------------------
       STEP 3
    ------------------------------------- */

    if (
        getProgress("action3") ===
        "clicked"
    ) {

        enableVerify(3);

        const timer =
            document.getElementById(
                "timer3"
            );

        if (timer) {

            timer.textContent =
                "Ready to verify";

        }

    }


    if (
        getProgress("completed3") ===
        "yes"
    ) {

        completeStepWithoutSaving(3);

    }

}


/* =========================================
   COMPLETE WITHOUT SAVING AGAIN
========================================= */

function completeStepWithoutSaving(step) {

    const card =
        document.getElementById(
            "step" + step
        );


    if (card) {

        card.classList.remove(
            "locked"
        );

        card.classList.add(
            "unlocked"
        );

    }


    if (step === 1) {

        unlockStep(2);

    }


    if (step === 2) {

        unlockStep(3);

    }


    if (step === 3) {

        const accessBox =
            document.getElementById(
                "accessBox"
            );

        const accessBtn =
            document.getElementById(
                "accessBtn"
            );


        accessBox.classList.remove(
            "locked"
        );

        accessBox.classList.add(
            "unlocked"
        );


        accessBtn.disabled =
            false;

    }

}


/* =========================================
   GET ACCESS BUTTON
========================================= */

function setupAccessButton() {

    const accessBtn =
        document.getElementById(
            "accessBtn"
        );


    if (!accessBtn) return;


    accessBtn.addEventListener(
        "click",
        function () {

            if (
                getProgress(
                    "completed3"
                ) === "yes"
            ) {

                window.location.href =
                    "./access.html";

            }

        }
    );

}


/* =========================================
   PAGE LOAD
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        restoreProgress();

        setupAccessButton();

    }
);
