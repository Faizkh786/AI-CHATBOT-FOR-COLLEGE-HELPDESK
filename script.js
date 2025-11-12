// FAQs Section - Hardcoded FAQs (not displayed on screen)
const FAQs = [
    {
        question: "WHO MADE YOU",
        answer: "MOHAMMAD FAIZ, FOUZIA KHATOON, FARAZ ULLAH KHAN"
    },
    {
        question: "who created you",
        answer: "MOHAMMAD FAIZ,FOUZIA KHATOON, FARAZ ULLAH KHAN"
    },
    {
        question: "who made this",
        answer: "MOHAMMAD FAIZ,FOUZIA KHATOON, FARAZ ULLAH KHAN"
    },
    {
        question: "what is the admission deadline",
        answer: "The admission deadline varies by program. For fall semester, applications typically close in January. For spring semester, the deadline is usually in October. Please check our website for specific program deadlines."
    },
    {
        question: "how do I apply for financial aid",
        answer: "To apply for financial aid, you need to complete the FAFSA (Free Application for Federal Student Aid) form. The priority deadline is usually March 1st. You can also apply for institutional scholarships through our online portal."
    },
    {
        question: "what is the tuition fee",
        answer: "Tuition fees vary by program and residency status. For in-state students, undergraduate tuition is approximately $10,000 per year. For out-of-state students, it's around $25,000 per year. Graduate programs have different rates. Please visit our financial aid office for detailed information."
    },
    {
        question: "what scholarships are available",
        answer: "We offer various scholarships including merit-based, need-based, and program-specific scholarships. Some popular ones include the Academic Excellence Scholarship, Leadership Scholarship, and Departmental Scholarships. Check our scholarships page for eligibility requirements and application deadlines."
    },
    {
        question: "what is campus life like",
        answer: "Campus life is vibrant and diverse! We have over 100 student organizations, sports teams, cultural events, and recreational activities. Our campus features modern facilities including a state-of-the-art library, fitness center, dining halls, and student lounges. There's always something happening on campus!"
    },
    // Integral University Helpdesk Chatbot FAQs
    // Format: { question: "question text", answer: "answer text" }
    { question: "what is integral university", answer: "Integral University is a private university located in Lucknow, Uttar Pradesh, established in 2004." },
    { question: "is integral university approved by ugc", answer: "Yes, Integral University is approved by the UGC under section 2(f) and 12(B) of the UGC Act 1956." },
    { question: "where is integral university located", answer: "It is located at Dasauli, Kursi Road, Lucknow, Uttar Pradesh, India." },
    { question: "what is the admission process", answer: "Admission is based on the Integral University Entrance Test (IUET) or merit in qualifying exams like JEE, NEET, or CUET." },
    { question: "how to apply for admission", answer: "You can apply online at admission.iul.ac.in or visit the admission office on campus." },
    { question: "what is iuet", answer: "IUET stands for Integral University Entrance Test, conducted for admission to various programs." },
    { question: "what is the eligibility for btech", answer: "You must have passed 10+2 with Physics, Chemistry, and Mathematics and secured at least 45% marks." },
    { question: "what is the eligibility for mba", answer: "Graduation with at least 50% marks is required. CAT, MAT, or IUET scores are accepted." },
    { question: "what is the tuition fee for integral university", answer: "B.Tech fees are around ₹1.5 lakh per year; other courses vary between ₹60,000 to ₹1.2 lakh annually." },
    { question: "what scholarships are available at integral university", answer: "Merit-based scholarships are available: 100% fee waiver for 90%+, 50% for 85–89%, 25% for 80–84%." },
    { question: "does the university provide hostel facility", answer: "Yes, hostels are available for both boys and girls inside the campus with AC and non-AC options." },
    { question: "what is the hostel fee", answer: "Hostel fee ranges between ₹80,000 to ₹1,10,000 per year depending on the room type." },
    { question: "is mess facility available in hostel", answer: "Yes, all hostels have hygienic mess facilities providing vegetarian and non-vegetarian meals." },
    { question: "what is the placement record", answer: "Integral University has a good placement record with companies like TCS, Infosys, Wipro, and Tech Mahindra." },
    { question: "what is the average package", answer: "The average placement package is around ₹4 LPA; top offers go up to ₹12 LPA for tech branches." },
    { question: "which companies visit the campus", answer: "Major recruiters include TCS, Wipro, Tech Mahindra, Infosys, Amazon, and HCL." },
    { question: "does the university provide internships", answer: "Yes, the placement cell arranges internships for students across various disciplines." },
    { question: "does the university offer phd programs", answer: "Yes, Integral University offers Ph.D. programs in engineering, management, sciences, and humanities." },
    { question: "is integral university naac accredited", answer: "Yes, the university is NAAC accredited and maintains quality academic standards." },
    { question: "what are the popular courses", answer: "Popular programs include B.Tech, BBA, MBA, B.Pharma, B.Arch, B.Sc, and M.Tech." },
    { question: "does the university offer bca", answer: "Yes, Integral University offers a 3-year Bachelor of Computer Applications program." },
    { question: "does the university offer mca", answer: "Yes, MCA is offered as a 2-year postgraduate program in computer applications." },
    { question: "what is the medium of instruction", answer: "All programs are taught in English medium." },
    { question: "does the university offer online programs", answer: "Yes, Integral University offers UGC-approved online degrees via iulonline.in." },
    { question: "what is the contact number of admission office", answer: "You can contact the admission office at +91-9335177775 or email admissions@iul.ac.in." },
    { question: "what documents are required for admission", answer: "10th and 12th mark sheets, transfer certificate, photo ID, and passport-sized photographs are required." },
    { question: "what is the campus size", answer: "The campus covers around 200 acres with modern infrastructure and facilities." },
    { question: "does the university have a library", answer: "Yes, the central library has a large collection of books, journals, and digital resources." },
    { question: "is wifi available on campus", answer: "Yes, the campus is Wi-Fi enabled for students and staff." },
    { question: "does the university have a gym", answer: "Yes, a well-equipped gym is available for students and staff." },
    { question: "what are the campus facilities", answer: "The campus has smart classrooms, labs, hostels, library, auditorium, canteen, and sports complex." },
    { question: "does the university have medical facilities", answer: "Yes, there is an in-campus medical center and hospital for students and staff." },
    { question: "is transportation available", answer: "Yes, university buses run across major routes of Lucknow for students and faculty." },
    { question: "how many faculties does the university have", answer: "The university has more than 12 faculties including engineering, management, pharmacy, and law." },
    { question: "does the university offer law courses", answer: "Yes, Integral University offers BA LLB, BBA LLB, and LLM programs." },
    { question: "does the university offer pharmacy courses", answer: "Yes, it offers D.Pharm, B.Pharm, and M.Pharm programs approved by PCI." },
    { question: "does the university offer architecture", answer: "Yes, the Faculty of Architecture offers B.Arch and M.Arch programs approved by COA." },
    { question: "does the university have research facilities", answer: "Yes, research labs and centers are available in every faculty to promote innovation and R&D." },
    { question: "what are the timings of the university", answer: "Regular classes are held from 9:00 AM to 5:00 PM, Monday to Saturday." },
    { question: "does the university celebrate festivals", answer: "Yes, annual fests, cultural events, and technical fests like IUL Fest are organized every year." },
    { question: "what is the dress code", answer: "Formal dress code is mandatory for all students during class hours." },
    { question: "is there an anti ragging cell", answer: "Yes, Integral University strictly follows UGC anti-ragging regulations and has an active anti-ragging committee." },
    { question: "does the university provide alumni network", answer: "Yes, the university maintains an active alumni association for student interaction and mentorship." },
    { question: "does integral university provide foreign exchange programs", answer: "Yes, the university has tie-ups with international universities for exchange and collaboration programs." },
    { question: "is integral university suitable for girls", answer: "Yes, the campus is safe, with separate hostels and 24/7 security for female students." },
    { question: "does the university provide financial aid", answer: "Yes, students can apply for need-based financial aid and government scholarships." },
    { question: "is there a dress code for engineering students", answer: "Yes, engineering students must wear formal dress or college uniform on class days." },
    { question: "does the university conduct industrial visits", answer: "Yes, regular industrial visits and workshops are organized for practical exposure." },
    { question: "does the university have a canteen", answer: "Yes, the canteen serves hygienic food and beverages for students and staff." },
    { question: "does the university have student clubs", answer: "Yes, multiple student clubs exist for cultural, technical, and sports activities." },
    { question: "does the university offer diploma courses", answer: "Yes, various diploma programs are available in engineering, pharmacy, and management." }
];

// DOM Elements
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const errorMessage = document.getElementById('errorMessage');
const topicButtons = document.querySelectorAll('.topic-btn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateTime();
    setInterval(updateTime, 60000); // Update time every minute
    checkBackendStatus();
    
    // Event Listeners
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    topicButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const topic = btn.getAttribute('data-topic');
            userInput.value = `Tell me about ${topic}`;
            sendMessage();
        });
    });
});

// Update current time
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

// Check backend status
async function checkBackendStatus() {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        
        const response = await fetch('http://localhost:5000/health', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (response.ok) {
            errorMessage.style.display = 'none';
            return true;
        } else {
            errorMessage.style.display = 'flex';
            return false;
        }
    } catch (error) {
        errorMessage.style.display = 'flex';
        return false;
    }
}

// Periodically check backend status
setInterval(checkBackendStatus, 10000); // Check every 10 seconds

// Send message
async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;
    
    // Add user message to chat
    addMessage(message, 'user');
    userInput.value = '';
    sendBtn.disabled = true;
    
    // Check FAQs first
    const faqMatch = checkFAQs(message);
    if (faqMatch) {
        setTimeout(() => {
            addMessage(faqMatch, 'bot');
            sendBtn.disabled = false;
        }, 500);
        return;
    }
    
    // Show loading
    const loadingId = addMessage('Thinking...', 'bot', true);
    
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 35000); // 35 second timeout
        
        const response = await fetch('http://localhost:5000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message }),
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `Server error: ${response.status}`);
        }
        
        const data = await response.json();
        removeMessage(loadingId);
        
        if (data.response) {
            addMessage(data.response, 'bot');
            errorMessage.style.display = 'none';
        } else if (data.error) {
            addMessage(`Error: ${data.error}`, 'bot');
        } else {
            addMessage('Sorry, I received an unexpected response from the server.', 'bot');
        }
    } catch (error) {
        removeMessage(loadingId);
        
        let errorMsg = 'Sorry, I encountered an error. ';
        if (error.name === 'AbortError') {
            errorMsg += 'The request timed out. Please try again.';
        } else if (error.message && (error.message.includes('Failed to fetch') || error.message.includes('NetworkError'))) {
            errorMsg += 'Please make sure the backend server is running. Start it with: python app.py';
        } else if (error.message) {
            errorMsg += error.message;
        } else {
            errorMsg += 'Please check the server connection.';
        }
        
        addMessage(errorMsg, 'bot');
        errorMessage.style.display = 'flex';
    } finally {
        sendBtn.disabled = false;
    }
}

// Add message to chat
function addMessage(text, sender, isLoading = false) {
    const messageDiv = document.createElement('div');
    const messageId = 'msg-' + Date.now();
    messageDiv.id = messageId;
    messageDiv.className = `message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    if (isLoading) {
        contentDiv.innerHTML = text + '<span class="loading"></span>';
    } else {
        contentDiv.textContent = text;
    }
    
    messageDiv.appendChild(contentDiv);
    
    if (!isLoading) {
        const timeDiv = document.createElement('div');
        timeDiv.className = 'message-time';
        timeDiv.textContent = new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        });
        messageDiv.appendChild(timeDiv);
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return messageId;
}

// Remove message
function removeMessage(messageId) {
    const message = document.getElementById(messageId);
    if (message) {
        message.remove();
    }
}

// Check FAQs for matching question (not displayed on screen, only used for bot responses)
function checkFAQs(userMessage) {
    const lowerMessage = userMessage.toLowerCase().trim();
    
    // Check for exact or partial matches
    for (const faq of FAQs) {
        const lowerQuestion = faq.question.toLowerCase().trim();
        
        // Check if user message contains the question or vice versa
        if (lowerMessage === lowerQuestion || 
            lowerMessage.includes(lowerQuestion) || 
            lowerQuestion.includes(lowerMessage)) {
            return faq.answer;
        }
        
        // Also check for keyword matches (more flexible)
        const questionWords = lowerQuestion.split(/\s+/);
        const messageWords = lowerMessage.split(/\s+/);
        const matchingWords = questionWords.filter(word => 
            word.length > 3 && messageWords.includes(word)
        );
        
        // If more than 50% of significant words match, return the answer
        if (matchingWords.length > 0 && matchingWords.length >= questionWords.length * 0.5) {
            return faq.answer;
        }
    }
    
    return null;
}

