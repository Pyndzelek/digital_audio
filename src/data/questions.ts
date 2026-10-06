export type Question = {
  number: number;
  text: string;
  options: [string, string, string, string];
  /** Index of the correct option: 0 = a, 1 = b, 2 = c, 3 = d */
  correct: 0 | 1 | 2 | 3;
  explanation: string;
  note?: string;
  image?: { src: string; caption: string };
};

export type Exam = {
  id: string;
  title: string;
  subtitle: string;
  rules?: string;
  questions: Question[];
};

const SAMPLE_HOLD = {
  src: "/images/sample-hold.png",
  caption:
    "Sample-and-hold circuit referred to by the question (labels IN, SAMPLE, HOLD, OUT are as in the original).",
};

const DELTA_MOD = {
  src: "/images/delta-modulation.png",
  caption:
    "Diagram referred to by the question. Modulador = modulator, Demodulador = demodulator, FPB = low-pass filter.",
};

const DITHER_DR_NOTE =
  "Dither also lets you resolve signals below 1 LSB, so some texts say it extends the effective dynamic range; (b) is the standard expected answer.";

const final2004: Question[] = [
  {
    number: 1,
    text: "If the A/D conversion process is not linear:",
    options: [
      "There is no correspondence with time.",
      "Jitter appears in the clock.",
      "Harmonic distortion is produced.",
      "None of the above.",
    ],
    correct: 2,
    explanation:
      "A non-linear transfer curve distorts the waveform, which generates harmonics.",
  },
  {
    number: 2,
    text: "Digitization:",
    options: [
      "Represents the amplitude of each sample by an integer.",
      "Assigns a bit sequence to each level.",
      "Discretizes the time axis.",
      "None of the above.",
    ],
    correct: 3,
    explanation:
      "Each statement describes only ONE stage of digitization (a = quantization, b = coding, c = sampling), not the whole process.",
    note: "Ambiguous question: all three statements are partly true. I chose (d) on the grounds that each one covers only a single stage; if your course notes define digitization by one of them, pick that one.",
  },
  {
    number: 3,
    text: "In temporal (time) compression:",
    options: [
      "Jitter is reduced.",
      "The amount of data is reduced.",
      "There is a time interval without data transmission.",
      "None of the above.",
    ],
    correct: 2,
    explanation:
      "Data are sent in a shorter burst at a higher rate, leaving a gap with no data.",
  },
  {
    number: 4,
    text: "The aperture effect:",
    options: [
      "Does not occur if we sample with Dirac deltas.",
      "Can be minimized with resampling.",
      "The two above are false.",
      "The first two are correct.",
    ],
    correct: 3,
    explanation:
      "Ideal (zero-width) impulses have no aperture effect, and resampling at a higher rate shortens the hold time, which reduces the roll-off.",
  },
  {
    number: 5,
    text: "For oversampling to reduce the quantization noise by 18 dB (assume it is white noise):",
    options: [
      "The oversampling factor must be 3.",
      "The oversampling factor must be 6.",
      "The oversampling factor must be 9.",
      "None of the above.",
    ],
    correct: 3,
    explanation:
      "Each doubling of the sampling rate gives −3 dB, so 18 dB needs 2⁶ = 64×. Factors 3, 6 and 9 give only about 4.8, 7.8 and 9.5 dB.",
  },
  {
    number: 6,
    text: "To achieve an oversampling factor of 6, one must:",
    options: [
      "Insert 5 zeros between every 2 samples.",
      "Insert 6 zeros between every 2 samples.",
      "Combine oversampling with noise shaping.",
      "None of the above.",
    ],
    correct: 0,
    explanation:
      "For a factor L you insert L−1 zeros between samples (then low-pass filter).",
  },
  {
    number: 7,
    text: "Combining oversampling and noise shaping:",
    options: [
      "The same S/N ratio can be kept with fewer bits.",
      "The same dynamic range can be kept with fewer bits.",
      "The two above are correct.",
      "None of the above.",
    ],
    correct: 2,
    explanation:
      "Both the S/N ratio and the dynamic range are recovered with fewer bits.",
  },
  {
    number: 8,
    text: "In a uniform quantizer:",
    options: [
      "The “mid-riser” transfer function is preferably used.",
      "The closer we are to a level change, the smaller the error.",
      "With 24 bits we have the same S/N as in floating point with 16+6 bits (mantissa + exponent).",
      "None of the above.",
    ],
    correct: 3,
    explanation:
      "(a) Mid-tread is the one normally preferred; (b) the error is largest near a level change; (c) 24-bit uniform has a much higher S/N (≈146 dB) than 16+6 floating point (≈98 dB).",
  },
  {
    number: 9,
    text: "Granular noise:",
    options: [
      "Is caused by the sampling clock jitter.",
      "Decreases the S/N ratio.",
      "Appears when quantizing very high-level signals.",
      "None of the above.",
    ],
    correct: 1,
    explanation:
      "It is quantization noise at low signal levels; it adds noise, so S/N goes down. (a) and (c) are false.",
  },
  {
    number: 10,
    text: "Dither:",
    options: [
      "Smooths the transfer function of the quantizer.",
      "Must only be used with uniform quantizers.",
      "Eliminates granular noise and bird chirping (“birdies”).",
      "None of the above.",
    ],
    correct: 2,
    explanation:
      "Dither decorrelates the error from the signal, so the audible granular noise / birdies disappear (replaced by a steady noise floor).",
  },
  {
    number: 11,
    text: "Requantization:",
    options: [
      "Is a digital dither.",
      "Needs analog dither.",
      "Keeps the analog dither.",
      "None of the above.",
    ],
    correct: 3,
    explanation:
      "Requantization (reducing the number of bits) needs digital dither, but it is not itself a dither, and it does not need or keep the analog one.",
  },
  {
    number: 12,
    text: "An A/D converter:",
    options: [
      "Block floating-point has problems with abrupt amplitude variations.",
      "Differential has an S/N ratio that depends on frequency.",
      "Compressor/expander introduces noise.",
      "All of the above are correct.",
    ],
    correct: 3,
    explanation: "All three statements are true.",
  },
  {
    number: 13,
    text: "An A/D converter in which the width of the quantization intervals is not exactly equal for all levels:",
    options: [
      "Has an offset error.",
      "Has an integral linearity error.",
      "Has a gain error.",
      "Has a differential non-linearity error.",
    ],
    correct: 3,
    explanation: "Unequal step widths = differential non-linearity (DNL).",
  },
  {
    number: 14,
    text: "A closed-loop A/D converter:",
    options: [
      "Needs a comparator.",
      "Needs a counter.",
      "Needs a capacitor.",
      "None of the above.",
    ],
    correct: 0,
    explanation:
      "Every closed-loop converter (counter, tracking, successive approximation) compares the input with the D/A feedback using a comparator.",
    note: "A counter is only needed in the counter/tracking types, and a capacitor in the integrating (open-loop) types, so (a) is the only statement true for all of them.",
  },
  {
    number: 15,
    text: "An A/D converter:",
    options: [
      "Flash is very fast.",
      "Successive approximation is faster than dual-slope.",
      "Integrating-ramp requires a very high clock frequency.",
      "All of the above are correct.",
    ],
    correct: 3,
    explanation: "All three statements are true.",
  },
  {
    number: 16,
    text: "The D/A converter:",
    options: [
      "Weighted-resistor type provides high quality.",
      "R/2R ladder type requires fewer resistors than the weighted-resistor type.",
      "Integrator type is widely used nowadays.",
      "None of the above.",
    ],
    correct: 2,
    explanation:
      "Weighted resistors need very precise, widely spread values (poor quality); the R/2R ladder uses more resistors (2n) but only two values; the integrator type is the one most used today.",
  },
];

// 2012 Model 1 — the 2013/14 exam contains exactly the same 20 questions.
const model1Questions: Question[] = [
  {
    number: 1,
    text: "The dynamic range of the ear is approximately:",
    options: ["20 kHz", "44.1 kHz", "48 dB", "100 dB"],
    correct: 3,
    explanation:
      "Dynamic range is measured in dB (about 100 dB for hearing).",
  },
  {
    number: 2,
    text: "When the read pointer catches up with the write pointer, we will have:",
    options: [
      "Buffer underrun",
      "Buffer overflow",
      "Either of the two above, depending on the signal",
      "Jitter",
    ],
    correct: 0,
    explanation:
      "Reading faster than writing empties the buffer (underrun). Overflow is the opposite case (write pointer catches the read pointer).",
  },
  {
    number: 3,
    text: "If we apply a small random variation to the sampling frequency we produce:",
    options: ["Dither", "Jitter", "Droop effect", "Aperture effect"],
    correct: 1,
    explanation: "Random timing error of the sampling instants is jitter.",
  },
  {
    number: 4,
    text: "When adding dither to a signal:",
    options: [
      "The S/N ratio increases",
      "The S/N ratio decreases",
      "The DR (dynamic range) increases",
      "The DR (dynamic range) decreases",
    ],
    correct: 1,
    explanation: "Dither is added noise, so the S/N ratio drops slightly.",
    note: DITHER_DR_NOTE,
  },
  {
    number: 5,
    text: "An aperture ratio of 100% is harmful for:",
    options: ["Jitter", "High frequencies", "Low frequencies", "It is not harmful"],
    correct: 1,
    explanation:
      "A wide pulse gives a sinc-shaped roll-off that attenuates the high frequencies (aperture effect).",
  },
  {
    number: 6,
    text: "By applying oversampling we can achieve:",
    options: [
      "An increase in bandwidth",
      "An increase in the S/N ratio",
      "An increase in the DR",
      "The first two are correct",
    ],
    correct: 1,
    explanation:
      "Quantization noise is spread over a wider band, so the in-band S/N improves (+3 dB per doubling). The signal bandwidth is not increased.",
  },
  {
    number: 7,
    text: "When is noise shaping applied?",
    options: [
      "Right after noise shaping",
      "When reducing the number of quantization bits",
      "Right after oversampling",
      "The first two are correct",
    ],
    correct: 1,
    explanation:
      "Noise shaping is used when requantizing to fewer bits (see Q10). Option (a) is meaningless.",
  },
  {
    number: 8,
    text: "If bird chirping appears when quantizing a song:",
    options: [
      "The quantization error is uncorrelated with the signal",
      "The clock jitter is uncorrelated with the signal",
      "The quantization error is correlated with the signal",
      "The clock jitter is correlated with the signal",
    ],
    correct: 2,
    explanation:
      "“Birdies” are the audible result of quantization error that is correlated with the signal.",
  },
  {
    number: 9,
    text: "Dither:",
    options: [
      "Eliminates the quantization error",
      "Reduces the quantization error",
      "Masks the quantization error",
      "None of the above",
    ],
    correct: 2,
    explanation:
      "Dither randomizes (decorrelates) the error so it is perceived as steady noise instead of distortion; the error itself is neither removed nor reduced.",
  },
  {
    number: 10,
    text: "Which processes are carried out when reducing the number of quantization bits?",
    options: [
      "Noise shaping",
      "Dither",
      "Digital dither",
      "The first and the third are correct",
    ],
    correct: 3,
    explanation:
      "Requantization uses noise shaping and digital dither (not analog dither).",
  },
  {
    number: 11,
    text: "A floating-point quantizer of 10+3 bits (mantissa + exponent) has:",
    options: [
      "SNR = 102 dB and DR = 60 dB",
      "SNR = 60 dB and DR = 60 dB",
      "SNR = 102 dB and DR = 42 dB",
      "SNR = 60 dB and DR = 102 dB",
    ],
    correct: 3,
    explanation:
      "SNR ≈ 6 dB × 10 mantissa bits = 60 dB; DR ≈ 6 dB × (10 + 2³ − 1) = 6 × 17 = 102 dB.",
  },
  {
    number: 12,
    text: "Which of the following statements is true for a compressor/expander?",
    options: [
      "The quantization steps are of variable size",
      "The SNR is inversely proportional to frequency",
      "It provides a larger DR thanks to the exponent, but keeps the SNR",
      "It uses oversampling and noise shaping",
    ],
    correct: 0,
    explanation:
      "Companding = non-uniform quantization (step size varies with level). (c) describes floating point; (d) describes sigma-delta.",
  },
  {
    number: 13,
    text: "Which of the following statements is true for a Sigma/Delta converter?",
    options: [
      "The SNR is inversely proportional to frequency",
      "It provides a larger DR thanks to the exponent, but keeps the SNR",
      "It uses oversampling and noise shaping",
      "The first and the third are correct",
    ],
    correct: 3,
    explanation:
      "Sigma-delta uses oversampling + noise shaping, and because the shaped noise rises with frequency its SNR falls as signal frequency rises. (b) is floating point.",
    note: "Judgment call: if you consider (a) false, the answer would be (c). The 2014-15 exam rewrites (a) as “directly proportional” so that only (c) is correct.",
  },
  {
    number: 14,
    text: "Which of the following A/D converters uses a D/A converter?",
    options: [
      "Sigma/Delta",
      "Successive approximation",
      "Flash",
      "The two above are correct",
    ],
    correct: 1,
    explanation:
      "Successive approximation compares the input with the output of an internal D/A converter. Flash uses only comparators.",
    note: "Option (d) says “the two above” = (b) and (c); Flash has no D/A, so (d) is false. (Sigma-delta also has a 1-bit DAC in its feedback loop, but successive approximation is the classic answer.)",
  },
  {
    number: 15,
    text: "Which of the following D/A converters is the most widely used?",
    options: ["Successive approximation", "Delta modulation", "Integrator", "Flash"],
    correct: 2,
    explanation:
      "Successive approximation and Flash are A/D techniques, and delta modulation is a coding scheme; the integrator (time-controlled) D/A is the one in common use.",
  },
  {
    number: 16,
    text: "What will be the cutoff frequency of the filter needed to change Fs from 8 kHz to 40 kHz?",
    options: ["4 kHz", "8 kHz", "20 kHz", "40 kHz"],
    correct: 0,
    explanation:
      "Interpolating ×5: the filter must remove the images above the original Nyquist frequency, 8 kHz / 2 = 4 kHz.",
  },
  {
    number: 17,
    text: "The compromise aperture ratio is:",
    options: ["5 %", "7.5 %", "10 %", "12.5 %"],
    correct: 3,
    explanation:
      "Standard compromise value between aperture attenuation and noise: 12.5 % (= 1/8).",
  },
  {
    number: 18,
    text: "The voltage drop in the capacitor during the hold phase is called:",
    options: ["Jitter", "Quantization error", "Droop effect", "Aperture effect"],
    correct: 2,
    explanation: "Capacitor discharge during hold = droop.",
  },
  {
    number: 19,
    text: "What function does the first transistor have in the circuit at the bottom?",
    options: [
      "Amplifier",
      "Impedance matcher",
      "Switch",
      "Switchable-value resistor",
    ],
    correct: 2,
    explanation:
      "The first transistor, gated by SAMPLE, connects/disconnects the input buffer from the hold capacitor.",
    image: SAMPLE_HOLD,
  },
  {
    number: 20,
    text: "What function does the second transistor have in the following circuit?",
    options: [
      "Amplifier",
      "Impedance matcher",
      "Switch",
      "Switchable-value resistor",
    ],
    correct: 3,
    explanation:
      "The second transistor, controlled by HOLD and connected across the capacitor, behaves as a resistance whose value is switched.",
    note: "Judgment call based on the circuit (it is not wired as a series switch). Same diagram as Q19.",
    image: SAMPLE_HOLD,
  },
];

const model2Questions: Question[] = [
  {
    number: 1,
    text: "The dynamic range of the ear is approximately:",
    options: ["20 kHz", "44.1 kHz", "48 dB", "100 dB"],
    correct: 3,
    explanation:
      "About 100 dB (and it is a level in dB, not a frequency).",
  },
  {
    number: 2,
    text: "Buffer overflow and buffer underrun errors can occur in:",
    options: [
      "Time compression",
      "The programmable delay",
      "Multiplexing",
      "The sampler",
    ],
    correct: 1,
    explanation:
      "The programmable delay is built on a buffer with read and write pointers; if one pointer catches the other you get overflow/underrun.",
    note: "Time compression also uses a buffer, but the programmable delay is the textbook example.",
  },
  {
    number: 3,
    text: "If we apply a small random variation to the sampling frequency we produce:",
    options: ["Dither", "Jitter", "Droop effect", "Aperture effect"],
    correct: 1,
    explanation: "Random timing error of the sampling instants is jitter.",
  },
  {
    number: 4,
    text: "When adding dither to a signal:",
    options: [
      "The S/N ratio increases",
      "The S/N ratio decreases",
      "The DR (dynamic range) increases",
      "The DR (dynamic range) decreases",
    ],
    correct: 1,
    explanation: "Dither is added noise, so the S/N ratio drops slightly.",
    note: DITHER_DR_NOTE,
  },
  {
    number: 5,
    text: "The compromise aperture ratio is:",
    options: ["1 %", "7.5 %", "12.5 %", "25 %"],
    correct: 2,
    explanation: "Standard compromise value: 12.5 % (= 1/8).",
  },
  {
    number: 6,
    text: "When oversampling and noise shaping are applied in combination, we achieve:",
    options: [
      "A decrease in bandwidth",
      "A decrease in the S/N ratio",
      "A decrease in the DR",
      "All of the above answers are false",
    ],
    correct: 3,
    explanation:
      "The combination increases (not decreases) the in-band S/N and dynamic range, and does not reduce the bandwidth.",
  },
  {
    number: 7,
    text: "Indicate another name used for noise shaping (“conformación de ruido”):",
    options: ["Dither", "Jitter", "Oversampling", "Noise Shaping"],
    correct: 3,
    explanation: "“Noise shaping” is the English term for the same technique.",
  },
  {
    number: 8,
    text: "When quantizing a low-level signal, the quantization error may show:",
    options: [
      "The same as if the signal were high-level",
      "Bird chirping (“birdies”)",
      "Granular noise",
      "The two above are correct",
    ],
    correct: 3,
    explanation:
      "At low levels the error is correlated with the signal, producing birdies and granular noise. (“The two above” = b and c.)",
  },
  {
    number: 9,
    text: "With dither:",
    options: [
      "The quantization error is eliminated",
      "The quantization error is not eliminated",
      "The distortion is turned into high-frequency noise",
      "The distortion is turned into low-frequency noise",
    ],
    correct: 1,
    explanation:
      "Dither does not remove the quantization error; it decorrelates it so the distortion becomes noise.",
    note: "The distortion becomes broadband (white) noise, not specifically high- or low-frequency, which is why (c) and (d) are not chosen.",
  },
  {
    number: 10,
    text: "The quantization noise will be ………… if the signal has a sufficient level.",
    options: ["Low", "Small", "Pink", "White"],
    correct: 3,
    explanation:
      "With a sufficiently large, busy signal the error is uncorrelated with it and has a flat spectrum: white noise.",
  },
  {
    number: 11,
    text: "A floating-point quantizer of 7+2 bits (mantissa + exponent) has:",
    options: [
      "SNR = 42 dB and DR = 60 dB",
      "SNR = 60 dB and DR = 60 dB",
      "SNR = 42 dB and DR = 42 dB",
      "SNR = 42 dB and DR = 66 dB",
    ],
    correct: 0,
    explanation:
      "SNR ≈ 6 dB × 7 = 42 dB; DR ≈ 6 dB × (7 + 2² − 1) = 6 × 10 = 60 dB.",
  },
  {
    number: 12,
    text: "Which of the following converters does NOT have an SNR inversely proportional to frequency?",
    options: ["Compressor/Expander", "Delta Modulation", "Sigma Delta", "ADPCM"],
    correct: 0,
    explanation:
      "Delta modulation, sigma-delta (noise shaping) and ADPCM (differential coding) all have frequency-dependent SNR; companding only depends on signal level.",
    note: "Judgment call: some texts treat sigma-delta as frequency-independent. If so, (a) and (c) would both qualify, but the compander is the only one that clearly fits.",
  },
  {
    number: 13,
    text: "What is the main problem of having a 20% offset error?",
    options: [
      "It reduces the signal-to-noise ratio by 20%",
      "It reduces the dynamic range by 20%",
      "The two above are correct",
      "The first two are correct and it also introduces a DC component",
    ],
    correct: 3,
    explanation:
      "An offset shifts the signal: less headroom (lower DR and S/N) and a DC component is added.",
    note: "(b) alone is also defensible, but (d) is the most complete statement.",
  },
  {
    number: 14,
    text: "Among the following D/A converters, which one is preferable for high-quality audio?",
    options: [
      "R/2R ladder",
      "Integrator",
      "Weighted resistors",
      "The first two are equally good",
    ],
    correct: 1,
    explanation:
      "The integrator (time-controlled) D/A is the one used in high-quality audio (see 2012 Model 1, Q15); it does not rely on precisely matched resistors.",
    note: "Judgment call between (a), (b) and (d).",
  },
  {
    number: 15,
    text: "Which converter does the following diagram correspond to?",
    options: ["Compressor/Expander", "Delta Modulation", "Sigma Delta", "ADPCM"],
    correct: 1,
    explanation:
      "Modulator = subtractor + 1-bit quantizer Q + integrator I in the feedback loop; demodulator = integrator + low-pass filter (FPB). That is delta modulation.",
    image: DELTA_MOD,
  },
];

const test201415: Question[] = [
  {
    number: 1,
    text: "Which is NOT an advantage of digital audio?",
    options: [
      "It allows error correction",
      "The circuitry it uses is cheaper and more compact",
      "The quality of the system is independent of the A/D and D/A processes",
      "The systems are extremely precise, stable and linear",
    ],
    correct: 2,
    explanation:
      "The overall quality does depend on the A/D and D/A converters, so this is not an advantage.",
  },
  {
    number: 2,
    text: "In a television studio, if we want to synchronize the audio and video signals we will use:",
    options: [
      "Differential sampling",
      "Programmable delay",
      "Time compression",
      "Carrier detection",
    ],
    correct: 1,
    explanation:
      "A programmable delay lets you delay the audio to line it up with the video.",
  },
  {
    number: 3,
    text: "Error concealment consists of:",
    options: [
      "Inverting the even samples sent and averaging them with the odd ones.",
      "Calculating the value of a lost sample from the ones surrounding it.",
      "Detecting and correcting error bursts.",
      "All are incorrect.",
    ],
    correct: 1,
    explanation:
      "Concealment = interpolating a lost sample from its neighbours (it does not recover the exact value).",
  },
  {
    number: 4,
    text: "According to the subjective quality criterion for sound, a sound is perfect when:",
    options: [
      "It has no faults.",
      "It has undetectable faults.",
      "It has correctable faults.",
      "Never. Perfect sound does not exist.",
    ],
    correct: 1,
    explanation:
      "In the subjective criterion, perfect = faults are imperceptible.",
  },
  {
    number: 5,
    text: "The recommended sampling frequency in broadcasting is:",
    options: ["32 kHz.", "44.1 kHz.", "48 kHz.", "96 kHz."],
    correct: 0,
    explanation:
      "32 kHz is the rate recommended for broadcast transmission (≈15 kHz audio bandwidth).",
    note: "48 kHz is the usual professional studio rate; the course answer for “radiodifusión” (broadcasting) is 32 kHz.",
  },
  {
    number: 6,
    text: "Regarding jitter:",
    options: [
      "It is random.",
      "It increases as the number of quantization bits increases.",
      "It is periodic.",
      "All are incorrect.",
    ],
    correct: 0,
    explanation:
      "Jitter is a random variation of the sampling instants, independent of the number of bits.",
  },
  {
    number: 7,
    text: "In a sample & hold system, the fact that during the hold the value obtained does not stay constant because of the capacitor discharging is known as:",
    options: [
      "Aperture effect.",
      "Droop effect.",
      "Hold effect.",
      "All are incorrect.",
    ],
    correct: 1,
    explanation: "Capacitor discharge during hold = droop.",
  },
  {
    number: 8,
    text: "With an aperture ratio of 0.01%:",
    options: [
      "We would attenuate the high frequencies.",
      "We would attenuate the low frequencies.",
      "There would be noise problems.",
      "We would obtain sinc(n·fs) in frequency.",
    ],
    correct: 2,
    explanation:
      "Such narrow pulses cause almost no aperture attenuation but carry very little energy, so the S/N ratio suffers.",
  },
  {
    number: 9,
    text: "When the write pointer catches up with the read pointer, we will have:",
    options: [
      "Buffer underrun",
      "Buffer overflow",
      "Either of the two above, depending on the signal",
      "Jitter",
    ],
    correct: 1,
    explanation:
      "Writing faster than reading overwrites data that has not been read yet (overflow).",
  },
  {
    number: 10,
    text: "When applying oversampling:",
    options: [
      "The bandwidth of the signal does not change.",
      "I can use reconstruction filters with less steep slopes.",
      "We reduce the level of quantization noise.",
      "All are correct.",
    ],
    correct: 3,
    explanation:
      "All three are true: signal bandwidth is unchanged, filters can be gentler, and the in-band quantization noise drops.",
  },
  {
    number: 11,
    text: "We can say that the quantization error is like analog noise:",
    options: [
      "Always",
      "When the signal levels are high.",
      "When it is correlated with the signal.",
      "When we use a quantizer with a mid-riser transfer function.",
    ],
    correct: 1,
    explanation:
      "With high-level signals the error is uncorrelated with the signal and behaves like random noise.",
  },
  {
    number: 12,
    text: "If n is the number of bits, the quantization S/N ratio is:",
    options: ["2n", "4n + 1.76", "6n", "8n"],
    correct: 2,
    explanation: "S/N ≈ 6.02·n + 1.76 dB, i.e. about 6 dB per bit.",
  },
  {
    number: 13,
    text: "Dither:",
    options: [
      "Eliminates the quantization error",
      "Reduces the quantization error",
      "Masks the quantization error",
      "None of the above",
    ],
    correct: 2,
    explanation:
      "Dither randomizes the error so it is masked as steady noise instead of distortion.",
  },
  {
    number: 14,
    text: "An ideal quantizer:",
    options: [
      "Does not introduce distortion.",
      "Can produce distortion.",
      "Produces distortion if and only if the input signal is non-linear.",
      "Only produces distortion when noise shaping is introduced.",
    ],
    correct: 1,
    explanation:
      "Even an ideal quantizer produces (correlated) distortion, especially at low signal levels, unless dither is used.",
  },
  {
    number: 15,
    text: "When mastering a CD:",
    options: [
      "We can introduce dither and oversampling.",
      "It can only be done if the master is 16-bit.",
      "We must introduce digital dither.",
      "It is necessary to equalize to even out all the levels.",
    ],
    correct: 2,
    explanation:
      "Going down to 16 bits requires requantization, which needs digital dither.",
  },
  {
    number: 16,
    text: "A floating-point quantizer:",
    options: [
      "Improves the S/N ratio and keeps the DR the same",
      "Improves the DR and keeps the S/N ratio",
      "Improves both the DR and the S/N",
      "Improves the DR at the expense of worsening the S/N",
    ],
    correct: 1,
    explanation:
      "The exponent extends the dynamic range, while the S/N is set by the mantissa.",
  },
  {
    number: 17,
    text: "Which of the following statements is true for a Sigma/Delta converter?",
    options: [
      "The SNR is directly proportional to frequency",
      "It provides a larger DR thanks to the exponent, but keeps the SNR",
      "It uses oversampling and noise shaping",
      "It allows quantizing at 32 bits if the electronics are of good quality.",
    ],
    correct: 2,
    explanation:
      "Sigma-delta = oversampling + noise shaping. (b) is floating point.",
  },
  {
    number: 18,
    text: "The A/D converter error that refers to the difference in size between two consecutive intervals is:",
    options: [
      "Offset error",
      "Integral linearity error",
      "Differential non-linearity error",
      "All are incorrect.",
    ],
    correct: 2,
    explanation:
      "Difference between consecutive step widths = differential non-linearity (DNL).",
  },
  {
    number: 19,
    text: "The fastest A/D converter is:",
    options: ["Single integration", "Flash", "Dual ramp", "Sigma-delta"],
    correct: 1,
    explanation:
      "Flash uses one comparator per level and converts in a single step.",
  },
  {
    number: 20,
    text: "The integrator D/A converter:",
    options: [
      "Uses an A/D converter",
      "Is a low-pass filter",
      "Belongs to the time-controlled family",
      "All are correct.",
    ],
    correct: 2,
    explanation:
      "It belongs to the time-controlled (pulse-width) family of D/A converters. (a) is false, so (d) cannot be right.",
    note: "(b) is also loosely true, but (c) is the textbook classification.",
  },
];

export const exams: Exam[] = [
  {
    id: "final-2004",
    title: "Final Exam – 31 January 2004",
    subtitle: "Part 1 – Multiple-choice test (questions 1–16)",
    rules:
      "Original rules: one valid answer per question; correct = +0.125 points; wrong = −1/3 of a correct answer.",
    questions: final2004,
  },
  {
    id: "2012-model-1",
    title: "Test A, Topics 1 & 2 – 2012, Model 1",
    subtitle: "20 questions",
    questions: model1Questions,
  },
  {
    id: "2012-model-2",
    title: "Test A, Topics 1 & 2 – 2012, Model 2",
    subtitle: "15 questions",
    questions: model2Questions,
  },
  {
    id: "2013-14",
    title: "Test A, Topics 1 & 2 – 2013/14",
    subtitle: "20 questions (same questions as 2012 Model 1)",
    questions: model1Questions,
  },
  {
    id: "2014-15",
    title: "Test A, Topics 1 & 2 – 2014/15",
    subtitle: "20 questions",
    questions: test201415,
  },
];

export type QuizItem = Question & { examTitle: string };

export function getQuizItems(examId: string): { title: string; rules?: string; items: QuizItem[] } | null {
  if (examId === "all") {
    return {
      title: "All questions",
      items: exams.flatMap((e) => e.questions.map((q) => ({ ...q, examTitle: e.title }))),
    };
  }
  const exam = exams.find((e) => e.id === examId);
  if (!exam) return null;
  return {
    title: exam.title,
    rules: exam.rules,
    items: exam.questions.map((q) => ({ ...q, examTitle: exam.title })),
  };
}

export const totalQuestions = exams.reduce((n, e) => n + e.questions.length, 0);
