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

const sampleTest: Question[] = [
  {
    number: 1,
    text: "The dynamic range of the ear is approximately:",
    options: ["20 kHz", "44.1 kHz", "48 dB", "100 dB"],
    correct: 3,
    explanation:
      "Dynamic range is a level ratio, so it is measured in dB (kHz is a frequency). From the hearing threshold to the threshold of pain the ear covers roughly 100–120 dB.",
  },
  {
    number: 2,
    text: "When using a floating-point quantizer (4+3 bits), which is the smallest sample?",
    options: ["1010 101", "1010 000", "1100 101", "1100 111"],
    correct: 3,
    explanation:
      "Official answer key: 1100 111. The 3-bit exponent sets the scaling, so the code with the largest exponent (111) together with the mantissa 1100 gives the smallest sample.",
    note: "The correct option comes from the course platform's answer key; the explanation depends on the course's mantissa/exponent convention.",
  },
  {
    number: 3,
    text: "In a programmable delay, if the read pointer reaches the write pointer and we try to read again we will obtain:",
    options: [
      "The newest data written of the buffer",
      "The oldest data written in the buffer",
      "A buffer overflow error",
      "A buffer underrun error",
    ],
    correct: 3,
    explanation:
      "If the reader catches up with the writer there is no new data left to read — the buffer has run empty, which is an underrun (an overflow is the writer overtaking the reader).",
  },
  {
    number: 4,
    text: "When applying oversampling we reduce the noise level extending it over frequency:",
    options: [
      "Only if it is a low frequency noise.",
      "We can only reduce the quantization noise.",
      "None of the above.",
      "Only if it is white noise.",
    ],
    correct: 1,
    explanation:
      "Oversampling spreads the quantization noise power over a wider band (up to fs/2), so less of it falls in the audio band. Noise already present in the analog signal is sampled along with it and is not reduced.",
  },
  {
    number: 5,
    text: "The best way to eliminate the background noise of an analog audio signal is:",
    options: [
      "Using dither",
      "Re-synchronizing the channels to eliminate the group delay",
      "The background noise can't be eliminated",
      "Using a band-pass filter from 100Hz to 20KHz",
    ],
    correct: 2,
    explanation:
      "Background noise overlaps the audio signal in frequency, so it cannot be separated and removed once it is part of the analog signal. Dither adds noise; filtering only removes out-of-band components.",
  },
  {
    number: 6,
    text: "The R/2R ladder DAC",
    options: [
      "Overrides the vast majority of the weighted resistors DAC problems.",
      "Is a current control based DAC",
      "Uses only 2 different values for the all the resistors: R and 2R.",
      "All of the above.",
    ],
    correct: 3,
    explanation:
      "The R/2R ladder uses only two resistor values (easy to match precisely), which solves the main problem of the weighted-resistor DAC (a huge spread of values), and it works by splitting currents in binary-weighted steps.",
  },
  {
    number: 7,
    text: "The quantization error that produces anharmonics is known as:",
    options: ["Droop effect", "Birdsinging", "Granulation noise", "Noise shaping"],
    correct: 1,
    explanation:
      "With low-level signals the quantization error becomes correlated with the signal and produces inharmonic (anharmonic) components heard as 'birdsinging'.",
  },
  {
    number: 8,
    text: "Which processes are performed when reducing the bit depth?",
    options: [
      "Noise shaping",
      "Digital dither",
      "Dither",
      "Both the first and the second are correct",
    ],
    correct: 3,
    explanation:
      "Requantizing to fewer bits is done in the digital domain: digital dither is added to decorrelate the error, and noise shaping moves the resulting noise to less audible frequencies.",
  },
  {
    number: 9,
    text: "The output of the sampling and hold circuit is:",
    options: [
      "The same input signal with impedance adaptation.",
      "A digital version of the input.",
      "An analog stepped version of the input.",
      "None of the above.",
    ],
    correct: 2,
    explanation:
      "The S/H holds each sampled voltage constant until the next sample, giving a staircase signal that is still analog — the ADC digitizes it afterwards.",
  },
  {
    number: 10,
    text: "If the transfer function slope is different than 1, the ADC will have a/an ____ error.",
    options: ["Differential non-linearity", "Offset", "Integral linearity", "Gain"],
    correct: 3,
    explanation:
      "A wrong slope of the transfer function is a gain error; a shift of the whole curve is an offset error.",
  },
];


// ============================================================================
// TOPICS 3, 4 & 5 EXAMS (DIGITAL AUDIO PROCESSING, COMPRESSION & 3D SOUND)
// ============================================================================

const topics345Model1: Question[] = [
  {
    number: 1,
    text: "Latency in audio processing occurs when:",
    options: [
      "The signal is not processed properly.",
      "There is a jitter error in the sampling clock.",
      "The block size is too large.",
      "The audio is processed in blocks.",
    ],
    correct: 3,
    explanation:
      "Latency is an inherent consequence of block processing with double buffering: the system must buffer N samples before computing the output (Latency = N_buf / Fs).",
  },
  {
    number: 2,
    text: "What is the purpose of updating audio parameters at a zero crossing?",
    options: [
      "To maximize the effect of dither.",
      "To minimize distortion (clicks / zipper noise).",
      "To maximize the SNR.",
      "To synchronize the clock and minimize jitter.",
    ],
    correct: 1,
    explanation:
      "Modifying parameters (such as gain or filter coefficients) when the waveform value is zero avoids abrupt amplitude jumps, eliminating clicks and switching distortion.",
  },
  {
    number: 3,
    text: "By what other name is a band-stop (suppressor) filter known?",
    options: [
      "Notch filter.",
      "Band-pass filter.",
      "Low-pass filter.",
      "High-pass filter.",
    ],
    correct: 0,
    explanation:
      "A suppressor filter with a very narrow rejection bandwidth designed to cut a specific interfering frequency (like 50 Hz mains hum) is called a Notch filter.",
  },
  {
    number: 4,
    text: "Which of the following equalizers employs a filter with a sliding cutoff frequency?",
    options: [
      "Loudness control.",
      "Bass / Treble shelving.",
      "Tone control.",
      "Both of the above.",
    ],
    correct: 2,
    explanation:
      "Traditional simple tone controls (controles de tono) slide the corner cutoff frequency across the transition band as the control potentiometer is turned.",
  },
  {
    number: 5,
    text: "A parametric equalizer allows varying:",
    options: [
      "Gain and quality factor (Q).",
      "Gain, quality factor (Q), and center frequency.",
      "Gain and center frequency.",
      "Quality factor (Q) and center frequency.",
    ],
    correct: 1,
    explanation:
      "A fully parametric equalizer provides complete continuous adjustment of all three fundamental parameters: Gain (G), Center Frequency (f0), and Quality Factor (Q = f0 / BW).",
  },
  {
    number: 6,
    text: "The attack time of a compressor is the time:",
    options: [
      "that elapses between when the signal exceeds the threshold and gain is reduced.",
      "that elapses between when the signal exceeds the threshold and gain is increased.",
      "that elapses between when the signal falls below the threshold and gain is increased.",
      "that elapses between when the signal falls below the threshold and gain is reduced.",
    ],
    correct: 0,
    explanation:
      "Attack time (Ta) is the time required for the compressor's VCA to attenuate the gain after the input signal amplitude crosses the threshold.",
  },
  {
    number: 7,
    text: "The center frequency of the presence control is approximately:",
    options: [
      "500 Hz.",
      "1000 Hz.",
      "2000 Hz.",
      "4000 Hz.",
    ],
    correct: 2,
    explanation:
      "Presence equalization operates in the 2 kHz to 3 kHz zone, the area of maximum human ear sensitivity, giving vocals and lead instruments extra clarity.",
  },
  {
    number: 8,
    text: "If a compressor is applied to a speech/vocal signal with a very short release time (Tr), it causes:",
    options: [
      "An effect similar to a backing vocal.",
      "Granular noise.",
      "Breathing noise (pumping).",
      "None of the above.",
    ],
    correct: 2,
    explanation:
      "If release time is too short, the compressor rapidly boosts background room noise during quiet pauses between spoken words, creating an unnatural 'breathing' or 'pumping' noise.",
  },
  {
    number: 9,
    text: "Which of the following mixing console controls operates on a stereo signal?",
    options: [
      "Balance.",
      "Fader.",
      "Pan pot (Panorámica).",
      "Insert point.",
    ],
    correct: 0,
    explanation:
      "Balance controls attenuate one channel relative to the other in an existing stereo pair (L/R). A Pan pot takes a mono signal and distributes it between two channels.",
  },
  {
    number: 10,
    text: "Which of the following psychoacoustic terms has an effective time window of approximately 5 to 20 ms?",
    options: [
      "A critical band.",
      "The short window in window switching.",
      "Post-masking.",
      "Pre-masking.",
    ],
    correct: 3,
    explanation:
      "Pre-masking (backward masking) occurs over a very short temporal interval (~5 to 20 ms) before the onset of a loud transient. Post-masking is much longer (50 to 200 ms).",
  },
  {
    number: 11,
    text: "If a critical band has an SMR of 25 dB, how many bits should be used to quantize the signal so that noise remains inaudible?",
    options: [
      "3 bits.",
      "4 bits.",
      "5 bits.",
      "6 bits.",
    ],
    correct: 2,
    explanation:
      "To make quantization noise inaudible, SNR must exceed SMR (SNR approx 6.02 * N > SMR). For N = 4: 24 dB < 25 dB (fails). For N = 5: 30 dB > 25 dB (NMR < 0 dB, noise is completely masked).",
  },
  {
    number: 12,
    text: "Besides window switching, what else can reduce pre-echo artifacts in an MPEG audio encoder?",
    options: [
      "Increasing the bit-rate.",
      "Perceptual coding.",
      "Post-masking.",
      "Only window switching can reduce pre-echo.",
    ],
    correct: 0,
    explanation:
      "Increasing the bit-rate allows allocating more bits to the transient frame, lowering the overall quantization noise floor below the hearing threshold.",
  },
  {
    number: 13,
    text: "How many band-pass filters are used in the frequency filter bank of the ATRAC codec?",
    options: [
      "3 filters.",
      "10 filters.",
      "32 filters.",
      "ATRAC uses transform coding, not a filter bank.",
    ],
    correct: 0,
    explanation:
      "Sony ATRAC (MiniDisc) uses a hybrid filter bank that first splits the 0–22 kHz spectrum into 3 frequency bands (0–5.5 kHz, 5.5–11 kHz, 11–22 kHz) before applying MDCT.",
  },
  {
    number: 14,
    text: "The SDDS (Sony Dynamic Digital Sound) cinema sound format internally uses several encoder modules of:",
    options: [
      "Dolby AC-2.",
      "Dolby AC-3.",
      "Sony ATRAC.",
      "THX.",
    ],
    correct: 2,
    explanation:
      "SDDS is an 8-channel optical digital cinema system developed by Sony that uses multiple ATRAC compression modules in parallel.",
  },
  {
    number: 15,
    text: "For spatial sound localization at high frequencies, the human auditory system uses:",
    options: [
      "ADPCM.",
      "Delta Modulation.",
      "Sigma-Delta.",
      "None of the above.",
    ],
    correct: 3,
    explanation:
      "Under Rayleigh's Duplex Theory, high-frequency localization relies on Interaural Level Differences (ILD) caused by head shadow. ADPCM, Delta, and Sigma-Delta are digital modulation techniques, not spatial hearing mechanisms!",
  },
  {
    number: 16,
    text: "Stereophonic systems rely primarily on _____ to generate a phantom acoustic image between two speakers:",
    options: [
      "ILD (Interaural Level Differences).",
      "ITD (Interaural Time Differences).",
      "Both ILD and ITD equally.",
      "HRTFs.",
    ],
    correct: 0,
    explanation:
      "Standard stereo mixing uses amplitude panning (gain differences between L and R channels) to produce Interaural Level Differences (ILD) at the listener position, governed by the Tangent Law.",
  },
  {
    number: 17,
    text: "What is the maximum recommended angular aperture between stereo speakers to generate a stable phantom image?",
    options: [
      "30º.",
      "45º.",
      "60º.",
      "90º.",
    ],
    correct: 2,
    explanation:
      "ITU-R BS.775 recommends an angle of 60º (+-30º from center). If the angle between speakers exceeds 60º, the phantom center collapses into the individual speakers ('hole-in-the-middle').",
  },
  {
    number: 18,
    text: "Which of the following acoustic cues allows a listener to perceive the distance (depth) of a sound source?",
    options: [
      "Reverberation (direct-to-reverberant sound ratio).",
      "Motion Parallax.",
      "Doppler effect.",
      "The first two are correct (Reverberation and Motion Parallax).",
    ],
    correct: 3,
    explanation:
      "Distance perception is primarily determined by the ratio of direct-to-reverberant sound energy and dynamic changes in angle due to head movement (motion parallax).",
  },
  {
    number: 19,
    text: "Spatial sound localization in highly reverberant rooms is possible thanks to:",
    options: [
      "Reverberation.",
      "Motion Parallax.",
      "The Doppler effect.",
      "The Haas effect (Precedence effect).",
    ],
    correct: 3,
    explanation:
      "The Haas (precedence) effect suppresses the spatial perception of wall reflections arriving within 5 to 40 ms, allowing the brain to localize the source solely from the first-arriving direct wavefront.",
  },
  {
    number: 20,
    text: "Which spatial audio system strictly requires a specific geometric loudspeaker layout (e.g. regular sphere/circle) to function?",
    options: [
      "Ambisonics.",
      "Binaural system.",
      "Wave Field Synthesis.",
      "None of the above.",
    ],
    correct: 0,
    explanation:
      "Ambisonics decomposes the 3D soundfield into spherical harmonics (B-format W, X, Y, Z) and strictly requires regular, symmetrical geometric loudspeaker layouts for proper matrix decoding.",
  },
];

const topics345Model2: Question[] = [
  {
    number: 1,
    text: "The block processing in the frequency domain introduces:",
    options: [
      "Aliasing.",
      "Leakage.",
      "Latency.",
      "Both of the above (Aliasing and Leakage).",
    ],
    correct: 3,
    explanation:
      "Block processing in the frequency domain (via DFT/FFT) introduces both spectral leakage (from finite window truncation) and time aliasing (from circular convolution if zero-padding is insufficient).",
    note: "All block processing introduces latency, but frequency-domain block transforms specifically introduce aliasing and leakage (answers a & b).",
  },
  {
    number: 2,
    text: "Updating parameters at zero crossings achieves:",
    options: [
      "Reducing quantization noise.",
      "Improving the dynamic range of the signal.",
      "Reducing signal distortion (zipper noise / clicks).",
      "Both b and c.",
    ],
    correct: 2,
    explanation:
      "Parameter changes at zero-crossing points eliminate voltage steps, avoiding sudden transients and audible clicks.",
  },
  {
    number: 3,
    text: "A loudness equalizer:",
    options: [
      "Is a compressor used to equalize signal volume.",
      "Is an expander used to equalize signal volume.",
      "Applies volume-dependent frequency equalization.",
      "None of the above.",
    ],
    correct: 2,
    explanation:
      "Loudness compensation applies frequency curve contouring based on Fletcher-Munson equal-loudness contours, boosting bass/treble more at lower volumes.",
  },
  {
    number: 4,
    text: "Which control employs a sliding band-rejection (cutoff) filter?",
    options: [
      "Loudness.",
      "Bass / Treble.",
      "Midrange.",
      "Tone control.",
    ],
    correct: 3,
    explanation:
      "Traditional analog tone control circuits slide the filter cutoff/notch frequency across the spectrum as the control is rotated.",
  },
  {
    number: 5,
    text: "What parameter does a semi-parametric equalizer NOT modify?",
    options: [
      "The quality factor (Q).",
      "The gain.",
      "The center frequency.",
      "None of the above.",
    ],
    correct: 0,
    explanation:
      "A semi-parametric (quasi-parametric) EQ allows adjusting gain and center frequency, but has a fixed, non-adjustable Q factor.",
  },
  {
    number: 6,
    text: "A noise gate can be implemented using:",
    options: [
      "A compressor.",
      "An expander.",
      "A noise gate with a higher cutoff frequency.",
      "None of the above.",
    ],
    correct: 1,
    explanation:
      "A noise gate is an extreme downward expander (with an expansion ratio of 1:infinity below the threshold) that mutes background noise during pauses.",
  },
  {
    number: 7,
    text: "In a live sound reinforcement event, which type of mixing console would you use?",
    options: [
      "Split console.",
      "In-line console.",
      "Either of the two.",
      "None of the above.",
    ],
    correct: 0,
    explanation:
      "Split consoles physically separate the input channels from the monitor/master sub-mix sections, which is the standard design for live sound reinforcement.",
  },
  {
    number: 8,
    text: "In an MPEG audio encoder, a tone B will be masked by a tone A whenever:",
    options: [
      "Both are in the same critical band and B is above the hearing threshold.",
      "Both are in the same critical band and B is below the masking threshold.",
      "Both are in different critical bands and B is above the hearing threshold.",
      "Both are in different critical bands and B is below the hearing threshold.",
    ],
    correct: 1,
    explanation:
      "Auditory masking occurs when the weaker sound (B) falls below the elevated masking threshold generated by the louder masker tone (A) within that critical band.",
  },
  {
    number: 9,
    text: "Window switching is used to:",
    options: [
      "Adjust pre-masking.",
      "Adjust post-masking.",
      "Reduce the audibility of pre-echoes.",
      "None of the above.",
    ],
    correct: 2,
    explanation:
      "When transients occur, switching from long transform blocks to sequences of short blocks constrains quantization noise to the brief pre-masking window, eliminating pre-echo.",
  },
  {
    number: 10,
    text: "Which of the following systems employs a filter bank with three band-pass filters?",
    options: [
      "THX.",
      "ATRAC.",
      "Dolby AC-3.",
      "Both THX and Dolby AC-3.",
    ],
    correct: 1,
    explanation:
      "Sony ATRAC divides the input signal into three subbands (0–5.5 kHz, 5.5–11 kHz, 11–22 kHz) using a 3-band QMF filter bank before applying MDCT.",
  },
  {
    number: 11,
    text: "A floating-point quantizer with 10+3 bits (10-bit mantissa, 3-bit exponent) has:",
    options: [
      "SNR = 102 dB and Dynamic Range = 60 dB.",
      "SNR = 60 dB and Dynamic Range = 60 dB.",
      "SNR = 102 dB and Dynamic Range = 42 dB.",
      "SNR = 60 dB and Dynamic Range = 102 dB.",
    ],
    correct: 3,
    explanation:
      "SNR depends strictly on the mantissa bits: 10 * 6 dB = 60 dB. The 3-bit exponent allows 8 gain ranges of 6 dB each (7 * 6 = 42 dB extra dynamic range), giving a total Dynamic Range of 60 + 42 = 102 dB.",
  },
  {
    number: 12,
    text: "The SMR must be ...... than the SNR so that quantization noise is inaudible:",
    options: [
      "Greater.",
      "Lower (Menor).",
      "Equal.",
      "SNR and SMR are only compared in masking, not for quantization noise.",
    ],
    correct: 1,
    explanation:
      "The Noise-to-Mask Ratio is NMR = SMR - SNR. To ensure the quantization noise stays below the masking threshold (NMR < 0 dB), SMR must be lower than SNR.",
  },
  {
    number: 13,
    text: "Audio coding in the frequency domain (transform coding):",
    options: [
      "Is always better than time-domain coding.",
      "Is worse than time-domain coding for percussive transient signals.",
      "Is better than time-domain coding for percussive signals.",
      "Is preferable only for low-frequency signals.",
    ],
    correct: 1,
    explanation:
      "Frequency-domain transform coding spreads quantization noise across the entire block duration in time, creating audible pre-echo before sharp percussive transients.",
  },
  {
    number: 14,
    text: "A stereophonic phantom image is more stable when working with:",
    options: [
      "Low frequencies.",
      "Mid frequencies.",
      "High frequencies.",
      "Stability is independent of frequency.",
    ],
    correct: 0,
    explanation:
      "At low frequencies (<1.5 kHz), wavelengths are larger than the head diameter, producing clean, stable phase/ITD wavefronts that avoid destructive comb filtering.",
  },
  {
    number: 15,
    text: "In reverberant acoustic conditions, spatial sound localization is possible thanks to:",
    options: [
      "The phantom image.",
      "The Haas effect (Precedence effect).",
      "The Doppler effect.",
      "Both phantom image and Haas effect.",
    ],
    correct: 1,
    explanation:
      "The Haas effect suppresses the directional perception of wall reflections arriving within 5 to 40 ms after the direct sound, allowing localization by the direct wavefront.",
  },
  {
    number: 16,
    text: "How many audio channels does Dolby Surround Pro Logic decode?",
    options: [
      "3 channels.",
      "4 channels.",
      "5 channels.",
      "5.1 channels.",
    ],
    correct: 1,
    explanation:
      "Dolby Surround Pro Logic decodes 4 channels: Left, Center, Right, and a mono band-limited Surround channel (from a 2-channel matrixed Lt/Rt signal).",
  },
  {
    number: 17,
    text: "Which country pioneered and promotes the 22.2 multichannel sound system?",
    options: [
      "Spain.",
      "USA.",
      "Korea.",
      "Japan.",
    ],
    correct: 3,
    explanation:
      "The 22.2 multichannel sound format was developed in Japan by NHK for Super Hi-Vision / 8K broadcasting.",
  },
  {
    number: 18,
    text: "How many loudspeakers will a single sound source activate in a 2D VBAP setup with 50 loudspeakers?",
    options: [
      "2 loudspeakers.",
      "3 loudspeakers.",
      "50 loudspeakers.",
      "Depends on position, but a minimum of 3.",
    ],
    correct: 0,
    explanation:
      "In 2D VBAP, a virtual sound source is placed between the two closest adjacent loudspeakers forming an active pair.",
  },
  {
    number: 19,
    text: "The 'Inside the Head Effect' (in-head acoustic localization) occurs in:",
    options: [
      "Stereophonic speaker systems.",
      "Binaural systems using headphones.",
      "Transaural systems.",
      "THX cinema systems.",
    ],
    correct: 1,
    explanation:
      "Listening to binaural audio over regular headphones without individualized HRTF filtering or head tracking often causes the sound stage to localize inside the listener's head.",
  },
  {
    number: 20,
    text: "How many loudspeakers will be driven by a single sound source in a Wave Field Synthesis (WFS) system with 50 loudspeakers?",
    options: [
      "2 loudspeakers.",
      "3 loudspeakers.",
      "50 loudspeakers.",
      "Depends on position and array geometry, but at most 50.",
    ],
    correct: 3,
    explanation:
      "WFS drives an array of loudspeakers simultaneously to reconstruct the curvature of the physical wavefront; depending on source position, all or a subset (up to 50) are driven.",
  },
];

const topics345Extended: Question[] = [
  {
    number: 1,
    text: "A stereophonic phantom image is more stable when working with:",
    options: [
      "Low frequencies.",
      "Mid frequencies.",
      "High frequencies.",
      "Stability is independent of frequency.",
    ],
    correct: 0,
    explanation:
      "Low frequencies (<1.5 kHz) provide smooth, stable phase and ITD cues without head shadow acoustic diffraction issues.",
  },
  {
    number: 2,
    text: "In reverberant conditions, spatial sound localization is possible thanks to:",
    options: [
      "The phantom image.",
      "The Haas effect (Precedence effect).",
      "The Doppler effect.",
      "Both phantom image and Haas effect.",
    ],
    correct: 1,
    explanation:
      "The Haas precedence effect suppresses the directional cues of room reflections arriving within ~5–40 ms.",
  },
  {
    number: 3,
    text: "How many audio channels does Dolby Surround Pro Logic decode?",
    options: [
      "3 channels.",
      "4 channels.",
      "5 channels.",
      "5.1 channels.",
    ],
    correct: 1,
    explanation:
      "Dolby Surround Pro Logic uses 4 channels: Left, Center, Right, and mono Surround.",
  },
  {
    number: 4,
    text: "Which country promotes the 22.2 multichannel sound system?",
    options: [
      "Spain.",
      "USA.",
      "Korea.",
      "Japan.",
    ],
    correct: 3,
    explanation:
      "Japan's NHK developed the 22.2 system for Super Hi-Vision.",
  },
  {
    number: 5,
    text: "The 'Inside the Head Effect' occurs in:",
    options: [
      "Stereophonic systems.",
      "Binaural systems using headphones.",
      "Transaural systems.",
      "THX.",
    ],
    correct: 1,
    explanation:
      "Headphone listening without individual HRTF compensation results in localization collapsed inside the skull.",
  },
  {
    number: 6,
    text: "How many loudspeakers will be driven by a sound source in WFS with 50 loudspeakers?",
    options: [
      "2 loudspeakers.",
      "3 loudspeakers.",
      "50 loudspeakers.",
      "Depends on source position and array geometry, but at most 50.",
    ],
    correct: 3,
    explanation:
      "WFS drives speaker arrays dynamically to synthesize the physical wavefront (up to all 50 speakers).",
  },
  {
    number: 7,
    text: "If a block has 512 samples, the double buffering technique introduces a latency of:",
    options: [
      "512 samples.",
      "1024 samples.",
      "Either of the two, depending on processor load.",
      "Does not introduce latency.",
    ],
    correct: 0,
    explanation:
      "Double buffering delays the signal by exactly 1 buffer length (512 samples) while the buffer is being filled.",
  },
  {
    number: 8,
    text: "Which filters typically have fixed central and cutoff frequencies?",
    options: [
      "Loudness.",
      "Shelving filters.",
      "Semi-parametric.",
      "Parametric.",
    ],
    correct: 1,
    explanation:
      "Simple shelving equalizers (like standard treble and bass controls) have fixed corner/cutoff frequencies and fixed slope.",
  },
  {
    number: 9,
    text: "Which frequency control provides greater amplification as the listening volume decreases?",
    options: [
      "Loudness.",
      "Tone control.",
      "Bass / Treble.",
      "De-esser.",
    ],
    correct: 0,
    explanation:
      "A Loudness control boosts bass (and treble) at low listening volumes to compensate for the ear's reduced sensitivity at low levels.",
  },
  {
    number: 10,
    text: "If a 1 kHz tone at 70 dB level produces an SMR of 14 dB, how many bits should be used to quantize the critical band containing the tone?",
    options: [
      "2 bits.",
      "3 bits.",
      "9 bits.",
      "10 bits.",
    ],
    correct: 1,
    explanation:
      "We need SNR > SMR (approx 6.02 * N > 14 dB). For N = 3 bits: 3 * 6 = 18 dB > 14 dB. Thus, 3 bits are sufficient.",
  },
  {
    number: 11,
    text: "Using the same average bit rate, which provides higher audio quality, CBR or VBR?",
    options: [
      "VBR (Variable Bit Rate).",
      "CBR (Constant Bit Rate).",
      "Both provide the same quality.",
      "Depends on the song.",
    ],
    correct: 0,
    explanation:
      "VBR distributes bits adaptively, allocating more bits to complex passages and fewer bits to simple ones, providing higher overall quality.",
  },
  {
    number: 12,
    text: "When emitting sound simultaneously from multiple coherent sources, what appears?",
    options: [
      "High-frequency aliasing.",
      "Crosstalk.",
      "A phantom image.",
      "None of the above.",
    ],
    correct: 2,
    explanation:
      "Coherent acoustic sources sum constructively and destructively, producing a virtual 'phantom' sound source perceived between the physical speakers.",
  },
  {
    number: 13,
    text: "Once all auditory tools (ITD, ILD, HRTF) have been used, what final option helps resolve confused front-back localization?",
    options: [
      "Head tracking.",
      "Applying the tangent law.",
      "Moving the head.",
      "The onset.",
    ],
    correct: 2,
    explanation:
      "Dynamic head rotation breaks the symmetry of the cone of confusion, immediately resolving front vs. back ambiguities.",
  },
  {
    number: 14,
    text: "The difference in level between the masking signal and the minimum masking threshold within a critical band is called:",
    options: [
      "Signal-to-Mask Ratio (SMR).",
      "Signal-to-Noise Ratio (SNR).",
      "Noise-to-Mask Ratio (NMR).",
      "None of the above.",
    ],
    correct: 0,
    explanation:
      "SMR (Signal-to-Mask Ratio) is the difference in dB between the peak signal power and the masking threshold in that subband.",
  },
  {
    number: 15,
    text: "The optimal Wiener filter requires knowledge of:",
    options: [
      "The PSD of the contaminated signal.",
      "The PSD of the noise.",
      "The PSD of the contaminated signal and the clean signal.",
      "None of the above.",
    ],
    correct: 2,
    explanation:
      "The theoretical Wiener filter transfer function is H(f) = P_x(f) / P_c(f) = P_x(f) / [P_x(f) + P_n(f)], requiring the PSD of the clean signal and contaminated signal.",
  },
  {
    number: 16,
    text: "To achieve an accompanying vocal (doubling / chorus) effect, what delay time should be used?",
    options: [
      "1 ms.",
      "Less than 10 ms.",
      "Between 10 and 25 ms.",
      "More than 25 ms.",
    ],
    correct: 2,
    explanation:
      "Delays between 10 and 25 ms create doubling / chorus effects (voz acompañante). Below 10 ms creates flanging/comb filtering; above 25 ms creates distinct slapback echo.",
  },
  {
    number: 17,
    text: "Pre-echo artifacts in transform coding:",
    options: [
      "Are caused by window switching.",
      "Are caused by auditory masking.",
      "Are quantization noise spread over time in percussive transient signals.",
      "None of the above.",
    ],
    correct: 2,
    explanation:
      "When a sharp percussive transient occurs, quantization noise is spread across the entire analysis window, becoming audible prior to the transient attack.",
  },
  {
    number: 18,
    text: "Joint-Stereo format in the MPEG-1 audio standard:",
    options: [
      "Can be used in all three layers (Layer I, II, and III).",
      "Can be used only in Layers 1 and 2.",
      "Can be used only in Layer 3.",
      "None of the above.",
    ],
    correct: 0,
    explanation:
      "Joint-Stereo is supported in all three MPEG-1 layers (Intensity Stereo in Layers I, II, III; Mid/Side Stereo also supported in Layer III).",
  },
  {
    number: 19,
    text: "Window switching in the MPEG-1 standard:",
    options: [
      "Can be used by all three layers.",
      "Can be used only in Layers 1 and 2.",
      "Can be used only in Layer 3 (MP3).",
      "None of the above.",
    ],
    correct: 2,
    explanation:
      "Window switching (switching between long and short MDCT windows) was introduced specifically in MPEG-1 Layer III (MP3). Layers I and II use fixed filter banks.",
  },
  {
    number: 20,
    text: "The phenomenon where a weak sound is not perceived because a louder sound occurs AFTER it is called:",
    options: [
      "Auditory masking.",
      "Pre-echoes.",
      "Pre-masking (backward masking).",
      "None of the above.",
    ],
    correct: 2,
    explanation:
      "Pre-masking (backward masking) occurs when a louder sound masks a preceding softer sound that occurred 5 to 20 ms earlier.",
  },
  {
    number: 21,
    text: "Window switching is used to minimize the distortion caused by:",
    options: [
      "Percussive signals (transients).",
      "Auditory pre-masking.",
      "SMR.",
      "None of the above.",
    ],
    correct: 0,
    explanation:
      "Window switching detects percussive transient attacks and switches to short analysis windows to prevent pre-echo artifacts.",
  },
  {
    number: 22,
    text: "How many samples must we advance when finishing a block with OVERLAP-SAVE? (M = block size, N = filter length, M > N):",
    options: [
      "M + N - 1.",
      "M.",
      "N.",
      "None of the above (correct is M - N + 1).",
    ],
    correct: 3,
    explanation:
      "In Overlap-Save, each block produces L = M - N + 1 valid linear convolution samples. Therefore, the input pointer advances by M - N + 1 samples.",
  },
  {
    number: 23,
    text: "How many correct samples are obtained per block using the OVERLAP-SAVE method? (M = block size, N = filter length, M > N):",
    options: [
      "M.",
      "N.",
      "M + N - 1.",
      "M - N + 1.",
    ],
    correct: 3,
    explanation:
      "Due to circular convolution aliasing in the first N - 1 samples, exactly M - (N - 1) = M - N + 1 alias-free samples are recovered per block.",
  },
  {
    number: 24,
    text: "How many samples must we advance when finishing a block with OVERLAP-ADD? (M = block size, N = filter length, M > N):",
    options: [
      "M + N - 1.",
      "M.",
      "N.",
      "None of the above.",
    ],
    correct: 1,
    explanation:
      "In Overlap-Add, input blocks of M samples are zero-padded to M + N - 1. We advance through the input stream by M samples each step.",
  },
  {
    number: 25,
    text: "A flanger effect is produced with:",
    options: [
      "A variable (modulated) delay.",
      "A variable chorus.",
      "A variable reverb.",
      "None of the above.",
    ],
    correct: 0,
    explanation:
      "A flanger mixes the original audio with a time-varying short delay (<15 ms) modulated by an LFO, creating sweeping comb filter notches.",
  },
  {
    number: 26,
    text: "In the THX system:",
    options: [
      "The decoder implements a mono/stereo downmix.",
      "Up to 5.1 channels are permitted.",
      "It uses ATRAC as its compression core.",
      "None of the above.",
    ],
    correct: 3,
    explanation:
      "THX is NOT a codec or audio format; it is a quality certification program specifying acoustic parameters, room design, and playback performance.",
  },
  {
    number: 27,
    text: "The physical separation between adjacent loudspeakers in Wave Field Synthesis causes:",
    options: [
      "Emission of cylindrical instead of spherical waves.",
      "Boundary diffraction.",
      "Spatial aliasing above a certain cutoff frequency.",
      "None of the above.",
    ],
    correct: 2,
    explanation:
      "Spatial sampling of the wavefront with discrete loudspeakers spaced by Delta x causes spatial aliasing above the frequency f_alias = c / (2 * Delta x).",
  },
  {
    number: 28,
    text: "How many audio channels does 1st-order 3D Ambisonics (B-format) require?",
    options: [
      "1 channel.",
      "2 channels.",
      "4 channels.",
      "9 channels.",
    ],
    correct: 2,
    explanation:
      "1st-order 3D Ambisonics uses 4 channels: W (omnidirectional pressure), X (front-back figure-8), Y (left-right figure-8), and Z (up-down figure-8). Formula: (N + 1)^2 = (1 + 1)^2 = 4.",
  },
  {
    number: 29,
    text: "Which of the following spatial audio systems requires a cross-talk canceller?",
    options: [
      "Transaural systems.",
      "Wavefield Synthesis.",
      "Ambisonics HOA.",
      "Binaural systems.",
    ],
    correct: 0,
    explanation:
      "Transaural audio reproduces binaural 3D audio over stereo loudspeakers, which requires cross-talk cancellation so the left speaker signal does not reach the right ear and vice versa.",
  },
  {
    number: 30,
    text: "Beyond what is stated in duplex theory, how does a binaural system improve localization accuracy and elevation?",
    options: [
      "Using spherical harmonics.",
      "Employing HRTFs (Head-Related Transfer Functions).",
      "Using a head tracking system.",
      "None of the above.",
    ],
    correct: 1,
    explanation:
      "HRTFs capture the spectral pinna, head, and torso filtering cues that resolve the cone of confusion, elevation, and front-back localization.",
  },
  {
    number: 31,
    text: "In Dolby Surround Pro Logic:",
    options: [
      "There are 5.1 channels.",
      "There is an LFE channel.",
      "Digital technology is used.",
      "The surround channel is mono.",
    ],
    correct: 3,
    explanation:
      "Dolby Surround Pro Logic is an analog matrix decoding system where the surround channel is band-limited (100 Hz–7 kHz) mono sent to two rear speakers.",
  },
  {
    number: 32,
    text: "In which layers of MPEG-1 audio coding can the Mono/Stereo mode be used?",
    options: [
      "In all layers (Layer I, II, and III).",
      "From Layer 2 onwards.",
      "Only in Layer 3.",
      "That mode does not exist.",
    ],
    correct: 0,
    explanation:
      "All MPEG-1 audio layers (Layer I, Layer II, and Layer III) support Mono, Dual-Channel, Stereo, and Joint-Stereo channel configurations.",
  },
  {
    number: 33,
    text: "A 5.0 surround sound system is also standardized and known as:",
    options: [
      "Dolby Surround Prologic.",
      "3/2 System.",
      "HRTF.",
      "None of the above.",
    ],
    correct: 1,
    explanation:
      "Under ITU-R BS.775, 5.0 configuration is designated as 3/2 (3 front channels: L, C, R / 2 surround channels: Ls, Rs).",
  },
  {
    number: 34,
    text: "The optical film format Dolby Stereo uses:",
    options: [
      "5.1 channels.",
      "5 channels.",
      "4 channels.",
      "None of the above.",
    ],
    correct: 2,
    explanation:
      "Dolby Stereo on 35mm optical film encodes 4 audio channels (Left, Center, Right, Surround) into two bilateral optical sound tracks using MP matrix encoding.",
  },
];

export const exams: Exam[] = [
  // --- UPCOMING EXAM: TOPICS 3, 4 & 5 ---
  {
    id: "topics-345-model-1",
    title: "Test A, Topics 3, 4 & 5 – Model 1",
    subtitle: "20 questions (Processing, Compression, 3D Sound)",
    questions: topics345Model1,
  },
  {
    id: "topics-345-model-2",
    title: "Test A, Topics 3, 4 & 5 – Model 2",
    subtitle: "20 questions (Processing, Compression, 3D Sound)",
    questions: topics345Model2,
  },
  {
    id: "topics-345-extended",
    title: "Test A, Topics 3, 4 & 5 – Extended Exam",
    subtitle: "34 questions (Comprehensive Review)",
    questions: topics345Extended,
  },
  // --- PREVIOUS EXAMS: TOPICS 1 & 2 ---
  {
    id: "final-2004",
    title: "Final Exam – 31 January 2004",
    subtitle: "Part 1 – Multiple-choice test (questions 1–16)",
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
  {
    id: "sample-test",
    title: "Sample test (Topics 1 & 2)",
    subtitle: "10 questions",
    rules: "Original rules: correct = +1 point; wrong = −0.33 points.",
    questions: sampleTest,
  },
];

export type QuizItem = Question & { examTitle: string };

export function getQuizItems(examId: string): { title: string; rules?: string; items: QuizItem[] } | null {
  if (examId === "all") {
    return {
      title: "All questions (Entire Course)",
      items: exams.flatMap((e) => e.questions.map((q) => ({ ...q, examTitle: e.title }))),
    };
  }
  if (examId === "all-345") {
    const t345Exams = exams.filter((e) => e.id.startsWith("topics-345"));
    return {
      title: "All Questions – Topics 3, 4 & 5",
      items: t345Exams.flatMap((e) => e.questions.map((q) => ({ ...q, examTitle: e.title }))),
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
export const totalQuestionsTopics345 = [
  ...topics345Model1,
  ...topics345Model2,
  ...topics345Extended,
].length;
