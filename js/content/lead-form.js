'use strict';

if (window.location.href.includes('https://mail.notifyvisitors.com/forms/editor/home?formID')) {
  const hiddenLeadFormEditor = document.querySelector('#discriptionTextArea > div.pb10[style*="display:none"]');

  if (hiddenLeadFormEditor) {
    const actionTitle = hiddenLeadFormEditor.querySelector('.textTitleStyle.disInline').textContent;

    if (actionTitle === 'Custom Script') {
      hiddenLeadFormEditor.style.display = 'block';
    }
  }
}

// if (window.location.href.includes('notifyvisitors.com') && window.location.href.includes('editor')) {
//   const codeIcon = document.createElement('div');

//   codeIcon.className = 'code-icon';
//   codeIcon.id = 'nvCodeSnippets';

//   const initialSnippetDropdown = `
//     <ol>
//       <li id="cookieSnippets">Cookie</li>
//     </ol>
//   `;

//   codeIcon.innerHTML = `
//     <img class="code-snippet-img" id="code-snippet-img" src="https://img.icons8.com/pastel-glyph/64/000000/code--v1.png" alt="show" />
//     <div class="no-display" id="codeIconDropDown">
//       <div id="codeSnippetHead">
//         <p style="font-weight: bold; font-size: 15px;" id="snippetBackBtn">&larr;</p>
//       </div>
//       <div id="codeSnippetBody">
//         ${initialSnippetDropdown}
//       </div>
//     </div>
//   `;

//   document.body.append(codeIcon);

//   const codeSnippetIcon = document.querySelector('#code-snippet-img');

//   const codeSnippetDropdown = document.querySelector('#codeIconDropDown');
//   const codeSnippetBody = document.querySelector('#codeSnippetBody');

//   const snippetBackBtn = document.querySelector('#snippetBackBtn');
//   if (snippetBackBtn) {
//     snippetBackBtn.addEventListener('click', () => {
//       codeSnippetBody.innerHTML = initialSnippetDropdown;
//     });
//   }

//   codeSnippetIcon.addEventListener('click', () => {
//     if (codeSnippetDropdown) {
//       codeSnippetDropdown.classList.toggle('no-display');
//     }
//   });

//   const cookieSnippets = document.querySelector('#cookieSnippets');
//   cookieSnippets.addEventListener('click', () => {
//     codeSnippetBody.innerHTML = `
//         document.cookie = 'name:val; expires: before; path: /;';
//       `;
//   });
// }
