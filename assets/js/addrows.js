// 创建一个函数，用于生成HTML字符串
function createDiv(index) {
    // 使用模板字符串生成HTML，其中${index}会被替换为传入的参数
    return `
    <div class="columns is-centered" style="width: 90%;margin-left: auto;margin-right: auto;">
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demo/wavs/${index}_src.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"><strong style="font-size: larger;">Source:</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demo/wavs/${index}_tgt.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}tgt"> <strong style="font-size: larger;">MEDIC:</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demo/wavs/${index}_ddim.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}ddim"> <strong style="font-size: larger;">DDIM.Inv:</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demo/wavs/${index}_ddpm.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}ddpm"> <strong style="font-size: larger;">DDPM.Fri:</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demo/wavs/${index}_sdedit.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}sdedit"> <strong style="font-size: larger;">SDEdit:</strong>
                </p>
            </div>
        </div>
    </div>
    `;
}

// 创建一个函数，用于生成HTML字符串
function createRow(id) {
// 循环创建10个div
    rowid = "row"+id
    const rowElement = document.getElementById(rowid);
    for (let i = id*10; i < 5+id*10; i++) {
        // 创建div
        const index = String(i).padStart(6, '0');
        const div = createDiv(index);
        // 将div添加到页面中，这里假设你要添加到body中
        rowElement.innerHTML += div
        fetch('./demo/prompt/'+index+'_src.txt')
        .then(response => response.text())
        .then(data => {
          // 使用正则表达式找出所有用[]包裹的文字
          const regex = /\[(.*?)\]/g;
          let match;
          const parts = [];
          let lastIndex = 0;
          while ((match = regex.exec(data)) !== null) {
            // 将匹配的文字用<strong style="font-size: larger;">标签包裹起来
            const marked = `<strong style="font-size: larger;"> [${match[1]}]</strong>`;
            // 将原文中的匹配文字替换为突出显示的文字
            parts.push(data.slice(lastIndex, match.index), marked);
            lastIndex = regex.lastIndex;
          }
          parts.push(data.slice(lastIndex));
          // 将处理后的文字显示在页面上
          document.getElementById(index).innerHTML += parts.join('');
          fetch('./demo/prompt/'+index+'_tgt.txt')
          .then(response => response.text())
          .then(data => {
            // 使用正则表达式找出所有用[]包裹的文字
            const regex = /\[(.*?)\]/g;
            let match;
            const parts = [];
            let lastIndex = 0;
            while ((match = regex.exec(data)) !== null) {
              // 将匹配的文字用<strong style="font-size: larger;">标签包裹起来
              const marked = `<strong style="font-size: larger;">[${match[1]}]</strong>`;
              // 将原文中的匹配文字替换为突出显示的文字
              parts.push(data.slice(lastIndex, match.index), marked);
              lastIndex = regex.lastIndex;
            }
            parts.push(data.slice(lastIndex));
            // 将处理后的文字显示在页面上
            document.getElementById(index+'tgt').innerHTML += parts.join('');
            document.getElementById(index+'ddim').innerHTML += parts.join('');
            document.getElementById(index+'ddpm').innerHTML += parts.join('');                                    
            document.getElementById(index+'sdedit').innerHTML += parts.join('');
          });
        });
    }
}

// module.exports = { createRow };

// 创建一个函数，用于生成HTML字符串
function createDivdic1(index) {
    // 使用模板字符串生成HTML，其中${index}会被替换为传入的参数
    return `
    <div class="columns is-centered" style="width: 90%;margin-left: auto;margin-right: auto;">
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demo/wavs/${index}_src.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}srcdic1"><strong style="font-size: larger;">Source:</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demo/wavs/${index}_tgt.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}tgtdic1"> <strong style="font-size: larger;">MEDIC:</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demo/ablation/${index}_dic-0.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}dic0"> <strong style="font-size: larger;">[0,0,0]:</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demo/ablation/${index}_dic-1.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}dic1"> <strong style="font-size: larger;">[src, 0, 0]:</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demo/ablation/${index}_dic-2.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}dic2"> <strong style="font-size: larger;">[src, src, 0]:</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demo/ablation/${index}_dic-3.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}dic3"> <strong style="font-size: larger;">[src, tgt, 0]:</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demo/ablation/${index}_dic-4.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}dic4"> <strong style="font-size: larger;">[src, 0, src]:</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demo/ablation/${index}_dic-5.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}dic5"> <strong style="font-size: larger;">[src, 0, tgt]:</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demo/ablation/${index}_dic-6.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}dic6"> <strong style="font-size: larger;">[src, 0, har]:</strong>
                </p>
            </div>
        </div>
    </div>
    `;
}

// 创建一个函数，用于生成HTML字符串
function createRowdic1(id) {
// 循环创建10个div
    rowid = "row"+id
    const rowElement = document.getElementById(rowid+'dic1');
    i = id
    // 创建div
    const index = String(i).padStart(6, '0');
    const div = createDivdic1(index);
    // 将div添加到页面中，这里假设你要添加到body中
    rowElement.innerHTML += div
    fetch('./demo/prompt/'+index+'_src.txt')
    .then(response => response.text())
    .then(data => {
        // 使用正则表达式找出所有用[]包裹的文字
        const regex = /\[(.*?)\]/g;
        let match;
        const parts = [];
        let lastIndex = 0;
        while ((match = regex.exec(data)) !== null) {
        // 将匹配的文字用<strong style="font-size: larger;">标签包裹起来
        const marked = `<strong style="font-size: larger;"> [${match[1]}]</strong>`;
        // 将原文中的匹配文字替换为突出显示的文字
        parts.push(data.slice(lastIndex, match.index), marked);
        lastIndex = regex.lastIndex;
        }
        parts.push(data.slice(lastIndex));
        // 将处理后的文字显示在页面上
        document.getElementById(index+'srcdic1').innerHTML += parts.join('');
        fetch('./demo/prompt/'+index+'_tgt.txt')
        .then(response => response.text())
        .then(data => {
        // 使用正则表达式找出所有用[]包裹的文字
        const regex = /\[(.*?)\]/g;
        let match;
        const parts = [];
        let lastIndex = 0;
        while ((match = regex.exec(data)) !== null) {
            // 将匹配的文字用<strong style="font-size: larger;">标签包裹起来
            const marked = `<strong style="font-size: larger;">[${match[1]}]</strong>`;
            // 将原文中的匹配文字替换为突出显示的文字
            parts.push(data.slice(lastIndex, match.index), marked);
            lastIndex = regex.lastIndex;
        }
        parts.push(data.slice(lastIndex));
        // 将处理后的文字显示在页面上
        document.getElementById(index+'tgtdic1').innerHTML += parts.join('');
        document.getElementById(index+'dic0').innerHTML += parts.join('');
        document.getElementById(index+'dic1').innerHTML += parts.join('');                                   
        document.getElementById(index+'dic2').innerHTML += parts.join('');
        document.getElementById(index+'dic3').innerHTML += parts.join('');
        document.getElementById(index+'dic4').innerHTML += parts.join('');
        document.getElementById(index+'dic5').innerHTML += parts.join('');
        document.getElementById(index+'dic6').innerHTML += parts.join('');
        });
    });
}

function createDivdic2(index) {
    // 使用模板字符串生成HTML，其中${index}会被替换为传入的参数
    return `
    <div class="columns is-centered" style="width: 100%;" style="width: 80%;margin-left: auto;margin-right: auto;">
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demo/wavs/${index}_src.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}srcdic2"><strong style="font-size: larger;">Source:</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demo/wavs/${index}_tgt.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}tgtdic2"> <strong style="font-size: larger;">MEDIC:</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demo/ablation/${index}_dic-cac.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}diccac"> <strong style="font-size: larger;">w/CAC:</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demo/ablation/${index}_dic-msac.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}dicmsac"> <strong style="font-size: larger;">w/MSAC:</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demo/ablation/${index}_dic-wohb.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}dicwohb"> <strong style="font-size: larger;">w/o HB:</strong>
                </p>
            </div>
        </div>
    </div>
    `;
}

// 创建一个函数，用于生成HTML字符串
function createRowdic2(id) {
// 循环创建10个div
    rowid = "row"+id
    const rowElement = document.getElementById(rowid+'dic2');
    i = id
    // 创建div
    const index = String(i).padStart(6, '0');
    const div = createDivdic2(index);
    // 将div添加到页面中，这里假设你要添加到body中
    rowElement.innerHTML += div
    fetch('./demo/prompt/'+index+'_src.txt')
    .then(response => response.text())
    .then(data => {
        // 使用正则表达式找出所有用[]包裹的文字
        const regex = /\[(.*?)\]/g;
        let match;
        const parts = [];
        let lastIndex = 0;
        while ((match = regex.exec(data)) !== null) {
        // 将匹配的文字用<strong style="font-size: larger;">标签包裹起来
        const marked = `<strong style="font-size: larger;"> [${match[1]}]</strong>`;
        // 将原文中的匹配文字替换为突出显示的文字
        parts.push(data.slice(lastIndex, match.index), marked);
        lastIndex = regex.lastIndex;
        }
        parts.push(data.slice(lastIndex));
        // 将处理后的文字显示在页面上
        document.getElementById(index+'srcdic2').innerHTML += parts.join('');
        fetch('./demo/prompt/'+index+'_tgt.txt')
        .then(response => response.text())
        .then(data => {
        // 使用正则表达式找出所有用[]包裹的文字
        const regex = /\[(.*?)\]/g;
        let match;
        const parts = [];
        let lastIndex = 0;
        while ((match = regex.exec(data)) !== null) {
            // 将匹配的文字用<strong style="font-size: larger;">标签包裹起来
            const marked = `<strong style="font-size: larger;">[${match[1]}]</strong>`;
            // 将原文中的匹配文字替换为突出显示的文字
            parts.push(data.slice(lastIndex, match.index), marked);
            lastIndex = regex.lastIndex;
        }
        parts.push(data.slice(lastIndex));
        // 将处理后的文字显示在页面上
        document.getElementById(index+'tgtdic2').innerHTML += parts.join('');
        document.getElementById(index+'diccac').innerHTML += parts.join('');
        document.getElementById(index+'dicmsac').innerHTML += parts.join('');                                   
        document.getElementById(index+'dicwohb').innerHTML += parts.join('');
        });
    });
}