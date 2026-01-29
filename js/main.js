// 云浪科技 WaveGeo - 主JavaScript文件

document.addEventListener('DOMContentLoaded', function() {
    initStickyNav();
    
// 吸顶导航栏
function initStickyNav() {
    const stickyNav = document.getElementById('stickyNav');
    const heroSection = document.querySelector('.hero');
    
    if (!stickyNav || !heroSection) return;
    
    function toggleStickyNav() {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight * 0.5;
        
        if (window.pageYOffset > heroBottom) {
            stickyNav.classList.add('active');
        } else {
            stickyNav.classList.remove('active');
        }
    }
    
    toggleStickyNav();
    window.addEventListener('scroll', toggleStickyNav);
    initNavHighlight();
}

// 高亮当前导航项
function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links li a');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    function highlightNav() {
        const scrollPos = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNav);
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// 微信咨询弹层功能
    initWechatModal();
    
    // 平滑滚动
    initSmoothScroll();
    
    // 滚动动画
    initScrollAnimations();
    
    // 移动端导航优化
    initMobileOptimizations();
});


// 吸顶导航栏
function initStickyNav() {
    const stickyNav = document.getElementById('stickyNav');
    const heroSection = document.querySelector('.hero');
    
    if (!stickyNav || !heroSection) return;
    
    function toggleStickyNav() {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight * 0.5;
        
        if (window.pageYOffset > heroBottom) {
            stickyNav.classList.add('active');
        } else {
            stickyNav.classList.remove('active');
        }
    }
    
    toggleStickyNav();
    window.addEventListener('scroll', toggleStickyNav);
    initNavHighlight();
}

// 高亮当前导航项
function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links li a');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    function highlightNav() {
        const scrollPos = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNav);
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// 微信咨询弹层
function initWechatModal() {
    const wechatBtn = document.getElementById('wechatBtn');
    const wechatModal = document.getElementById('wechatModal');
    const modalClose = document.getElementById('modalClose');
    
    if (wechatBtn && wechatModal) {
        // 打开弹层
        wechatBtn.addEventListener('click', function() {
            wechatModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        // 关闭弹层 - 点击关闭按钮
        if (modalClose) {
            modalClose.addEventListener('click', function() {
                wechatModal.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
        
        // 关闭弹层 - 点击背景
        wechatModal.addEventListener('click', function(e) {
            if (e.target === wechatModal) {
                wechatModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // 关闭弹层 - 按ESC键
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && wechatModal.classList.contains('active')) {
                wechatModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// 平滑滚动到锚点
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// 滚动动画效果
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll(
        '.section-header, .value-card, .capability-card, .product-card, ' +
        '.risk-item, .step, .boundary-column, .insight-points'
    );
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// 移动端优化
function initMobileOptimizations() {
    // 检测是否为移动设备
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // 优化触摸事件
        optimizeTouchEvents();
        
        // 调整视口
        adjustViewport();
    }
    
    // 窗口大小改变时重新检查
    window.addEventListener('resize', debounce(function() {
        const isMobileNow = window.innerWidth <= 768;
        
        if (isMobile !== isMobileNow) {
            location.reload();
        }
    }, 250));
}

// 优化触摸事件
function optimizeTouchEvents() {
    // 为所有可点击元素添加触摸优化
    const clickableElements = document.querySelectorAll('.btn, .value-card, .capability-card, .product-card');
    
    clickableElements.forEach(el => {
        el.addEventListener('touchstart', function(e) {
            // 移除点击延迟
        }, { passive: true });
    });
}

// 调整视口
function adjustViewport() {
    // 确保移动端正确显示
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 页面加载完成后执行
window.addEventListener('load', function() {
    // 确保所有资源加载完成
    console.log('云浪科技 WaveGeo 网站已加载完成');
    
    // 添加页面加载完成标志
    document.body.classList.add('loaded');
});

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.message);
});
