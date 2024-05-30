// 创建一个函数，用于生成HTML字符串
function createDiv(index) {
    // 使用模板字符串生成HTML，其中${index}会被替换为传入的参数
    return `
    <div class="columns is-centered">
        <div class="column">
            <div class="content">
                <div class="tab_container">
                    <audio controls>
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
        <div class="column">
            <div class="content">
                <div class="tab_container">
                    <audio controls>
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
        <div class="column">
            <div class="content">
                <div class="tab_container">
                    <audio controls>
                        <source src="./demo/wavs/${index}_ddim.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}ddim"> <strong style="font-size: larger;">DDIM:</strong>
                </p>
            </div>
        </div>
        <div class="column">
            <div class="content">
                <div class="tab_container">
                    <audio controls>
                        <source src="./demo/wavs/${index}_ddpm.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}ddpm"> <strong style="font-size: larger;">DDPM:</strong>
                </p>
            </div>
        </div>
        <div class="column">
            <div class="content">
                <div class="tab_container">
                    <audio controls>
                        <source src="./demo/wavs/${index}_sdedit.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}sdedit"> <strong style="font-size: larger;">sdedit:</strong>
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
