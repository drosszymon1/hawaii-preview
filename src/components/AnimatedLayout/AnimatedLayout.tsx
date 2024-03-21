"use client";

import Navigation from "../Navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

interface AnimatedLayoutProps {
    children: React.ReactNode;
}

export const AnimatedLayout = ({ children }: AnimatedLayoutProps) => {


    useGSAP(
        () => {
            const applySection = document.getElementById("apply");
            const ball = document.querySelector(".ball");
            gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

            let posX = 0,
                posY = 0,
                mouseX = 0,
                mouseY = 0;

            gsap.to({}, {
                duration: 0.02,
                repeat: -1,
                onRepeat: function () {
                    posX += (mouseX - posX) / 9;
                    posY += (mouseY - posY) / 9;
                    gsap.set(ball, {
                        css: {
                            left: posX - 20,
                            top: posY - 20,
                        }
                    });
                }
            });

            document.addEventListener("mousemove", (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            applySection?.addEventListener("mouseenter", () => {
                ball?.classList.add("active");
            });

            applySection?.addEventListener("mouseleave", () => {
                ball?.classList.remove("active");
            });

            const smoother = ScrollSmoother.create({
                smooth: 3,
                speed: 0.4,
                smoothTouch: true,
                wrapper: "#customW",
                content: "#customC",
                normalizeScroll: true,
            });

            const pinBannerTrigger = ScrollTrigger.create({
                trigger: ".first-section-background",
                pin: true,
                start: "+=450 0",
                pinSpacing: false,
                scrub: 0.5,
                end: "+=1500",
            })

            const navTrigger = ScrollTrigger.create({
                trigger: ".navigation",
                start: "top top",
                pin: true,
                pinSpacing: false,
                scrub: 0.5,
                end: "+=1500",
            });

            const bannerContentTrigger = ScrollTrigger.create({
                trigger: ".pin-banner",
                pinSpacing: false,
                start: "top-=150px 0",
                pin: true,
                scrub: 0.5,
                end: `+=1500`,
            });

            const spacerTrigger = ScrollTrigger.create({
                trigger: "#spacer",
                start: "top-=150px 0",
                pin: true,
                pinSpacing: true,
                scrub: 0.5,
                end: "+=380",
            });

            const sponsorsTrigger = ScrollTrigger.create({
                trigger: "#sponsors",
                start: "center center",
                pin: true,
                pinSpacing: true,
                scrub: 0.5,
                end: "+=300"
            });

            const applyTrigger = ScrollTrigger.create({
                trigger: "#apply",
                start: "center-=50 center",
                pin: true,
                pinSpacing: false,
                scrub: 0.5,
                end: "+=600"
            });

            const spacer2Trigger = ScrollTrigger.create({
                trigger: "#spacer2",
                start: 0,
                pin: true,
                pinSpacing: true,
                scrub: 0.5,
                end: "+=750",
            });

            const palms = ["first-bg-palm", "second-bg-palm", "third-bg-palm", "fourth-bg-palm"];

            palms.forEach(palm => {
                const palmAnimation = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#sponsors",
                        start: "top +=150px",
                        end: "bottom +=150px",
                        scrub: true,
                    },
                });

                palmAnimation.to(`#${palm}`, {
                    x: palm.startsWith("first") || palm.startsWith("second") ? -150 : 150,
                    duration: 1,
                }).to(`#${palm}`, {
                    x: palm.startsWith("first") || palm.startsWith("second") ? 0 : 0,
                    duration: 1,
                });
            });

            gsap.to("#sun", {
                x: 0,
                y: 360,
                scrollTrigger: {
                    trigger: "#desk",
                    start: 0,
                    end: "+=800px",
                    scrub: true,
                },
            });

            gsap.to("#wave1", {
                y: 90,
                scrollTrigger: {
                    trigger: "#desk",
                    start: 0,
                    end: "+=800px",
                    scrub: true,
                },
            })

            gsap.to("#bird1", {
                x: -60,
                y: 450,
                scale: 0.2,
                opacity: 0,
                scrollTrigger: {
                    trigger: "#desk",
                    start: 0,
                    end: "+=800px",
                    scrub: true,
                },
            })

            gsap.to("#bird2", {
                x: 70,
                y: 450,
                scale: 0.2,
                opacity: 0,
                scrollTrigger: {
                    trigger: "#desk",
                    start: 0,
                    end: "+=800px",
                    scrub: true,
                },
            })

            gsap.to("#bird3", {
                x: 80,
                y: 380,
                scale: 0.2,
                opacity: 0,
                scrollTrigger: {
                    trigger: "#desk",
                    start: 0,
                    end: "+=800px",
                    scrub: true,
                },
            })

            gsap.to("#bird4", {
                x: -50,
                y: 370,
                scale: 0.2,
                opacity: 0,
                scrollTrigger: {
                    trigger: "#desk",
                    start: 0,
                    end: "+=800px",
                    scrub: true,
                },
            })

            gsap.to("#bird5", {
                x: 60,
                y: 290,
                scale: 0.2,
                opacity: 0,
                scrollTrigger: {
                    trigger: "#desk",
                    start: 0,
                    end: "+=800px",
                    scrub: true,
                },
            })
        }
    );


    return (
        <div id="customW">
            <div id="customC">
                <Navigation />
                {children}
            </div>
        </div>
    )
};