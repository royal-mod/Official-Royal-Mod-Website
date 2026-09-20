/* =========================================
   ROYAL MOD
   STEP-BY-STEP ACCESS SYSTEM
========================================= */


/* =========================================
   SUBSCRIBE / FOLLOW CLICK
========================================= */

function subscribeClicked(step) {

    /*
       Step 1 and Step 2 both use
       this function.

       After Subscribe is clicked,
       ONLY that step's VERIFY button
       becomes available.
    */

    if (step !== 1 && step !== 2) {
        return;
    }


    enableVerification(step);
}


/* =========================================
   INSTAGRAM FOLLOW CLICK
========================================= */

function followClicked() {

    /*
       Follow clicked →
       unlock Verify #3
    */

    enableVerification(3);
}


/* =========================================
   ENABLE VERIFY
========================================= */

function enableVerification(step) {

    const verifyButton =
        document.getElementById("verify" + step);

    const timer =
        document.getElementById("timer" + step);


    if (!verifyButton) {
        return;
    }


    verifyButton.disabled = false;

    verifyButton.classList.add("ready");


    if (timer) {

        timer.textContent =
            "Ready to verify";

    }
}


/* =========================================
   10 SECOND VERIFICATION
========================================= */

function verifyStep(step) {

    const verifyButton =
        document.getElementById("verify" + step);

    const timer =
        document.getElementById("timer" + step);


    if (!verifyButton) {
        return;
    }


    if (verifyButton.disabled) {
        return;
    }


    /*
       Disable Verify while
       verification is running.
    */

    verifyButton.disabled = true;

    verifyButton.classList.remove("ready");


    let seconds = 10;


    timer.textContent =
        "Verifying... " + seconds + "s";


    const countdown =
        setInterval(function () {

            seconds--;


            if (seconds > 0) {

                timer.textContent =
                    "Verifying... " + seconds + "s";

            }

            else {

                clearInterval(countdown);


                timer.textContent =
                    "✓ Verification complete";


                finishStep(step);

            }

        }, 1000);
}


/* =========================================
   FINISH STEP
========================================= */

function finishStep(step) {

    const currentCard =
        document.getElementById("step" + step);


    if (currentCard) {

        currentCard.classList.remove("active");

        currentCard.classList.add("completed");

    }


    /* =====================================
       STEP 1 COMPLETE
       → UNLOCK STEP 2 SUBSCRIBE ONLY
    ===================================== */

    if (step === 1) {

        const step2 =
            document.getElementById("step2");

        const subscribe2 =
            document.getElementById("subscribe2");


        step2.classList.remove("locked");

        step2.classList.add("active");


        /*
           Unlock second Subscribe button
        */

        subscribe2.classList.remove("disabled");

    }


    /* =====================================
       STEP 2 COMPLETE
       → UNLOCK INSTAGRAM FOLLOW ONLY
    ===================================== */

    else if (step === 2) {

        const step3 =
            document.getElementById("step3");

        const follow3 =
            document.getElementById("follow3");


        step3.classList.remove("locked");

        step3.classList.add("active");


        /*
           Unlock Instagram Follow button
        */

        follow3.classList.remove("disabled");

    }


    /* =====================================
       STEP 3 COMPLETE
       → UNLOCK ACCESS
    ===================================== */

    else if (step === 3) {

        unlockAccess();

    }
}


/* =========================================
   UNLOCK ACCESS
========================================= */

function unlockAccess() {

    const accessBox =
        document.getElementById("accessBox");

    const accessButton =
        document.getElementById("accessBtn");


    accessBox.classList.remove("locked");

    accessBox.classList.add("completed");


    accessButton.disabled = false;


    accessBox.querySelector("h2").textContent =
        "🔓 Access Unlocked";


    accessBox.querySelector("p").textContent =
        "All steps have been completed.";

}


/* =========================================
   GET ACCESS
========================================= */

function getAccess() {

    const accessButton =
        document.getElementById("accessBtn");


    if (accessButton.disabled) {
        return;
    }


    window.location.href =
        "./access.html";
}
