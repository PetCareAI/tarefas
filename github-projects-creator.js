#!/usr/bin/env node

/**
 * Script para adicionar tarefas com campos customizados ao GitHub Projects da organização PetCareAI
 * Usa o projeto existente #6 com cores e descrições corretas
 */

const { Octokit } = require('@octokit/rest');
const { graphql } = require('@octokit/graphql');

// Configuração
const CONFIG = {
  token: '',
  organization: 'PetCareAI',
  projectNumber: 6 // Projeto existente #6
};

// Inicialização do cliente
const octokit = new Octokit({ auth: CONFIG.token });
const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${CONFIG.token}`,
  },
});

// Definição dos campos customizados do projeto
// Cores permitidas: GRAY, BLUE, GREEN, YELLOW, ORANGE, RED, PINK, PURPLE
const PROJECT_FIELDS = {
  Status: {
    type: 'SINGLE_SELECT',
    options: [
      { name: 'Backlog', color: 'GRAY', description: 'Tarefa no backlog' },
      { name: 'Todo', color: 'RED', description: 'Pronto para iniciar' },
      { name: 'In Progress', color: 'YELLOW', description: 'Em desenvolvimento' },
      { name: 'In Review', color: 'BLUE', description: 'Em revisão' },
      { name: 'Done', color: 'GREEN', description: 'Concluído' }
    ]
  },
  Colaborador: {
    type: 'SINGLE_SELECT',
    options: [
      { name: '👩‍⚕️ Marina Santos', color: 'GREEN', description: 'Veterinária Chefe' },
      { name: '👨‍💻 Carlos Silva', color: 'BLUE', description: 'CTO & Lead Developer' },
      { name: '👩‍🎨 Ana Costa', color: 'PURPLE', description: 'Head of Design' },
      { name: '🧠 Roberto Lima', color: 'ORANGE', description: 'Comportamentalista Animal' },
      { name: '📊 Lucia Oliveira', color: 'RED', description: 'Data Scientist' },
      { name: '👨‍💼 Pedro Rodrigues', color: 'PINK', description: 'Community Manager' }
    ]
  },
  Repositorio: {
    type: 'SINGLE_SELECT',
    options: [
      { name: 'petcare-api', color: 'BLUE', description: 'Backend API' },
      { name: 'petcare-mobile', color: 'ORANGE', description: 'Aplicativo móvel' },
      { name: 'petcare-web', color: 'PURPLE', description: 'Frontend web' },
      { name: 'petcare-ml', color: 'RED', description: 'Machine Learning' },
      { name: 'petcare-docs', color: 'GREEN', description: 'Documentação' },
      { name: 'petcare-infrastructure', color: 'GRAY', description: 'Infraestrutura' },
      { name: 'petcare-content', color: 'PINK', description: 'Conteúdo' }
    ]
  },
  Field: {
    type: 'SINGLE_SELECT',
    options: [
      { name: 'Backend', color: 'BLUE', description: 'Desenvolvimento backend' },
      { name: 'Frontend', color: 'PURPLE', description: 'Desenvolvimento frontend' },
      { name: 'Mobile', color: 'ORANGE', description: 'Desenvolvimento móvel' },
      { name: 'ML/AI', color: 'RED', description: 'Machine Learning e IA' },
      { name: 'Data Science', color: 'PINK', description: 'Ciência de dados' },
      { name: 'Design', color: 'GREEN', description: 'Design e UX' },
      { name: 'Content', color: 'YELLOW', description: 'Criação de conteúdo' },
      { name: 'DevOps', color: 'GRAY', description: 'DevOps e infraestrutura' },
      { name: 'Research', color: 'PURPLE', description: 'Pesquisa e desenvolvimento' }
    ]
  },
  Prioridade: {
    type: 'SINGLE_SELECT',
    options: [
      { name: '🔥 Critical', color: 'RED', description: 'Prioridade crítica' },
      { name: '🔴 High', color: 'ORANGE', description: 'Alta prioridade' },
      { name: '🟡 Medium', color: 'YELLOW', description: 'Média prioridade' },
      { name: '🟢 Low', color: 'GREEN', description: 'Baixa prioridade' },
      { name: '🔵 Nice to Have', color: 'BLUE', description: 'Opcional' }
    ]
  },
  Dificuldade: {
    type: 'SINGLE_SELECT',
    options: [
      { name: '🟢 Easy (1-2)', color: 'GREEN', description: 'Fácil - iniciante' },
      { name: '🟡 Medium (3-5)', color: 'YELLOW', description: 'Médio - intermediário' },
      { name: '🔴 Hard (6-8)', color: 'ORANGE', description: 'Difícil - avançado' },
      { name: '🔥 Expert (9-10)', color: 'RED', description: 'Expert - muito difícil' }
    ]
  },
  Subgrupo: {
    type: 'SINGLE_SELECT',
    options: [
      { name: '🍽️ Nutrição', color: 'GREEN', description: 'Nutrição e alimentação' },
      { name: '📊 Analytics', color: 'RED', description: 'Análise de dados' },
      { name: '✍️ Conteúdo', color: 'ORANGE', description: 'Criação de conteúdo' },
      { name: '🏗️ Infrastructure', color: 'BLUE', description: 'Infraestrutura' },
      { name: '🤖 ML/AI', color: 'PURPLE', description: 'Machine Learning' },
      { name: '📱 Mobile', color: 'PINK', description: 'Desenvolvimento móvel' },
      { name: '🎨 Design', color: 'YELLOW', description: 'Design e UX' },
      { name: '🧠 Comportamento', color: 'GRAY', description: 'Análise comportamental' },
      { name: '👥 Comunidade', color: 'GREEN', description: 'Gestão de comunidade' },
      { name: '🔐 Segurança', color: 'RED', description: 'Segurança e compliance' },
      { name: '🔬 Pesquisa', color: 'BLUE', description: 'Pesquisa e desenvolvimento' },
      { name: '📈 Growth', color: 'ORANGE', description: 'Crescimento e marketing' }
    ]
  },
  Deadline: {
    type: 'DATE'
  },
  Estimativa: {
    type: 'TEXT'
  },
  Epic: {
    type: 'TEXT'
  }
};

// Variáveis globais para armazenar informações do projeto
let projectFields = {};

/* 
// Estrutura completa das equipes (comentado como solicitado)
const TEAMS = {
  marina: {
    name: "👩‍⚕️ Dr. Marina Santos - Veterinária Chefe",
    colaborador: "👩‍⚕️ Marina Santos",
    areas: {
      nutrition: {
        name: "🍽️ Nutrição & Saúde",
        subgrupo: "🍽️ Nutrição",
        field: "Content",
        repositorio: "petcare-docs",
        tasks: [
          { id: 1, title: "🥘 Criar base nutricional 50+ raças caninas", prioridade: "🔴 High", dificuldade: "🔴 Hard (6-8)", deadline: "2024-06-15", estimativa: "40h", status: "Todo" },
          // ... todas as 360 tarefas
        ]
      }
    }
  }
  // ... todas as 6 equipes
};
*/

// Estrutura example simplificada para demonstração
const SAMPLE_TASKS = [
  {
    title: "🥘 Criar base nutricional 50+ raças caninas",
    colaborador: "👩‍⚕️ Marina Santos",
    repositorio: "petcare-docs",
    field: "Content",
    prioridade: "🔴 High",
    dificuldade: "🔴 Hard (6-8)",
    subgrupo: "🍽️ Nutrição",
    deadline: "2024-06-15",
    estimativa: "40h",
    status: "Todo",
    epic: "Nutritional Database"
  },
  {
    title: "🔧 Refatorar arquitetura microserviços",
    colaborador: "👨‍💻 Carlos Silva",
    repositorio: "petcare-api",
    field: "Backend",
    prioridade: "🔥 Critical",
    dificuldade: "🔥 Expert (9-10)",
    subgrupo: "🏗️ Infrastructure",
    deadline: "2024-07-01",
    estimativa: "60h",
    status: "In Progress",
    epic: "Core Architecture"
  },
  {
    title: "🎯 Redesenhar onboarding flow",
    colaborador: "👩‍🎨 Ana Costa",
    repositorio: "petcare-web",
    field: "Design",
    prioridade: "🔴 High",
    dificuldade: "🟡 Medium (3-5)",
    subgrupo: "🎨 Design",
    deadline: "2024-08-01",
    estimativa: "40h",
    status: "Todo",
    epic: "User Experience"
  },
  {
    title: "📚 Taxonomia comportamentos caninos",
    colaborador: "🧠 Roberto Lima",
    repositorio: "petcare-ml",
    field: "ML/AI",
    prioridade: "🔴 High",
    dificuldade: "🔴 Hard (6-8)",
    subgrupo: "🧠 Comportamento",
    deadline: "2024-08-15",
    estimativa: "50h",
    status: "Backlog",
    epic: "Behavioral Analysis"
  },
  {
    title: "📈 Analisar 100k+ registros atividade",
    colaborador: "📊 Lucia Oliveira",
    repositorio: "petcare-ml",
    field: "Data Science",
    prioridade: "🔴 High",
    dificuldade: "🟡 Medium (3-5)",
    subgrupo: "📊 Analytics",
    deadline: "2024-09-01",
    estimativa: "50h",
    status: "Todo",
    epic: "Data Analysis"
  },
  {
    title: "🌍 5 grupos regionais Discord",
    colaborador: "👨‍💼 Pedro Rodrigues",
    repositorio: "petcare-content",
    field: "Content",
    prioridade: "🔴 High",
    dificuldade: "🟢 Easy (1-2)",
    subgrupo: "👥 Comunidade",
    deadline: "2024-09-15",
    estimativa: "40h",
    status: "Todo",
    epic: "Community Building"
  },
  {
    title: "🍼 Protocolo alimentação filhotes 0-6m",
    colaborador: "👩‍⚕️ Marina Santos",
    repositorio: "petcare-docs",
    field: "Content",
    prioridade: "🔴 High",
    dificuldade: "🟡 Medium (3-5)",
    subgrupo: "🍽️ Nutrição",
    deadline: "2024-06-20",
    estimativa: "20h",
    status: "Todo",
    epic: "Nutritional Database"
  },
  {
    title: "⚡ Implementar cache distributivo Redis",
    colaborador: "👨‍💻 Carlos Silva",
    repositorio: "petcare-infrastructure",
    field: "DevOps",
    prioridade: "🔴 High",
    dificuldade: "🟡 Medium (3-5)",
    subgrupo: "🏗️ Infrastructure",
    deadline: "2024-07-05",
    estimativa: "25h",
    status: "Todo",
    epic: "Core Architecture"
  }
];

async function main() {
  try {
    console.log('🚀 Iniciando configuração do GitHub Projects #6...\n');
    
    // 1. Obter ID do projeto existente #6
    const projectId = await getExistingProject();
    console.log(`✅ Projeto #6 encontrado com ID: ${projectId}\n`);
    
    // 2. Obter campos existentes do projeto
    await getExistingProjectFields(projectId);
    console.log('✅ Campos existentes obtidos\n');
    
    // 3. Criar campos customizados necessários
    await createCustomFields(projectId);
    console.log('✅ Campos customizados verificados/criados\n');
    
    // 4. Atualizar referência dos campos
    await getExistingProjectFields(projectId);
    console.log('✅ Referências dos campos atualizadas\n');
    
    // 5. Criar items no projeto
    await createProjectItems(projectId);
    console.log('✅ Items criados no projeto\n');
    
    console.log('🎉 Setup completo! Acesse seu projeto em:');
    console.log(`https://github.com/orgs/${CONFIG.organization}/projects/${CONFIG.projectNumber}`);
    
  } catch (error) {
    console.error('❌ Erro durante a execução:', error);
    console.error('Stack trace:', error.stack);
    process.exit(1);
  }
}

// Obter ID do projeto existente #6
async function getExistingProject() {
  console.log(`🔍 Obtendo projeto existente #${CONFIG.projectNumber}...`);
  
  try {
    const orgQuery = `
      query GetOrganization($login: String!) {
        organization(login: $login) {
          id
          projectV2(number: ${CONFIG.projectNumber}) {
            id
            title
          }
        }
      }
    `;
    
    const result = await graphqlWithAuth(orgQuery, { login: CONFIG.organization });
    
    if (!result.organization.projectV2) {
      throw new Error(`Projeto #${CONFIG.projectNumber} não encontrado na organização ${CONFIG.organization}`);
    }
    
    console.log(`  ✓ Projeto encontrado: "${result.organization.projectV2.title}"`);
    return result.organization.projectV2.id;
  } catch (error) {
    console.error('  ❌ Erro ao obter projeto:', error.message);
    throw error;
  }
}

// Obter campos existentes do projeto
async function getExistingProjectFields(projectId) {
  console.log('🔍 Obtendo campos existentes do projeto...');
  
  try {
    const fieldsQuery = `
      query GetProjectFields($projectId: ID!) {
        node(id: $projectId) {
          ... on ProjectV2 {
            fields(first: 50) {
              nodes {
                ... on ProjectV2Field {
                  id
                  name
                  dataType
                }
                ... on ProjectV2SingleSelectField {
                  id
                  name
                  dataType
                  options {
                    id
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    `;
    
    const result = await graphqlWithAuth(fieldsQuery, { projectId });
    
    projectFields = {};
    if (result.node && result.node.fields) {
      for (const field of result.node.fields.nodes) {
        projectFields[field.name] = field;
        console.log(`  ✓ Campo encontrado: ${field.name} (${field.dataType})`);
      }
    }
  } catch (error) {
    console.error('  ❌ Erro ao obter campos:', error.message);
  }
}

// Criar campos customizados se não existirem
async function createCustomFields(projectId) {
  console.log('⚙️ Verificando e criando campos customizados...');
  
  for (const [fieldName, fieldConfig] of Object.entries(PROJECT_FIELDS)) {
    try {
      // Verificar se o campo já existe
      if (projectFields[fieldName]) {
        console.log(`  ✓ Campo já existe: ${fieldName}`);
        continue;
      }
      
      // Criar o campo
      await createSingleField(projectId, fieldName, fieldConfig);
      console.log(`  ✓ Campo criado: ${fieldName}`);
      
      // Rate limiting
      await sleep(500);
      
    } catch (error) {
      console.error(`  ❌ Erro ao criar campo ${fieldName}:`, error.message);
    }
  }
}

// Criar um campo individual
async function createSingleField(projectId, fieldName, fieldConfig) {
  if (fieldConfig.type === 'SINGLE_SELECT') {
    const mutation = `
      mutation CreateSingleSelectField($projectId: ID!, $name: String!, $options: [ProjectV2SingleSelectFieldOptionInput!]!) {
        createProjectV2Field(input: {
          projectId: $projectId
          dataType: SINGLE_SELECT
          name: $name
          singleSelectOptions: $options
        }) {
          projectV2Field {
            ... on ProjectV2SingleSelectField {
              id
              name
              options {
                id
                name
                color
              }
            }
          }
        }
      }
    `;
    
    const result = await graphqlWithAuth(mutation, {
      projectId: projectId,
      name: fieldName,
      options: fieldConfig.options
    });
    
    return result.createProjectV2Field.projectV2Field;
    
  } else if (fieldConfig.type === 'DATE') {
    const mutation = `
      mutation CreateDateField($projectId: ID!, $name: String!) {
        createProjectV2Field(input: {
          projectId: $projectId
          dataType: DATE
          name: $name
        }) {
          projectV2Field {
            ... on ProjectV2Field {
              id
              name
            }
          }
        }
      }
    `;
    
    const result = await graphqlWithAuth(mutation, {
      projectId: projectId,
      name: fieldName
    });
    
    return result.createProjectV2Field.projectV2Field;
    
  } else if (fieldConfig.type === 'TEXT') {
    const mutation = `
      mutation CreateTextField($projectId: ID!, $name: String!) {
        createProjectV2Field(input: {
          projectId: $projectId
          dataType: TEXT
          name: $name
        }) {
          projectV2Field {
            ... on ProjectV2Field {
              id
              name
            }
          }
        }
      }
    `;
    
    const result = await graphqlWithAuth(mutation, {
      projectId: projectId,
      name: fieldName
    });
    
    return result.createProjectV2Field.projectV2Field;
  }
}

// Criar items no projeto
async function createProjectItems(projectId) {
  console.log('📋 Criando items no projeto...');
  
  let itemCount = 0;
  const totalItems = SAMPLE_TASKS.length;
  
  for (const task of SAMPLE_TASKS) {
    itemCount++;
    
    try {
      // Criar item draft no projeto
      const item = await createProjectItem(projectId, task);
      console.log(`  ✓ Item criado: ${task.title} (${itemCount}/${totalItems})`);
      
      // Configurar campos do item
      await setProjectItemFields(projectId, item.id, task);
      
      // Rate limiting
      await sleep(300);
      
    } catch (error) {
      console.error(`  ❌ Erro ao processar task "${task.title}":`, error.message);
    }
  }
}

// Criar item individual no projeto
async function createProjectItem(projectId, task) {
  const body = createItemBody(task);
  
  const mutation = `
    mutation CreateProjectItem($projectId: ID!, $title: String!, $body: String!) {
      addProjectV2DraftIssue(input: {projectId: $projectId, title: $title, body: $body}) {
        projectItem {
          id
        }
      }
    }
  `;
  
  const result = await graphqlWithAuth(mutation, {
    projectId: projectId,
    title: task.title,
    body: body
  });
  
  return result.addProjectV2DraftIssue.projectItem;
}

// Configurar campos do item
async function setProjectItemFields(projectId, itemId, task) {
  try {
    // Configurar cada campo
    const fieldsToSet = [
      { name: 'Status', value: task.status },
      { name: 'Colaborador', value: task.colaborador },
      { name: 'Repositorio', value: task.repositorio },
      { name: 'Field', value: task.field },
      { name: 'Prioridade', value: task.prioridade },
      { name: 'Dificuldade', value: task.dificuldade },
      { name: 'Subgrupo', value: task.subgrupo },
      { name: 'Deadline', value: task.deadline },
      { name: 'Estimativa', value: task.estimativa },
      { name: 'Epic', value: task.epic }
    ];
    
    for (const field of fieldsToSet) {
      await setItemFieldValue(projectId, itemId, field.name, field.value);
      await sleep(100); // Rate limiting entre campos
    }
    
  } catch (error) {
    console.error(`    ⚠ Erro ao configurar campos: ${error.message}`);
  }
}

// Configurar valor de campo individual
async function setItemFieldValue(projectId, itemId, fieldName, value) {
  try {
    const field = projectFields[fieldName];
    if (!field || !value) return;
    
    let fieldValue;
    
    if (field.dataType === 'SINGLE_SELECT') {
      // Para campos single select, encontrar a opção correspondente
      const option = field.options?.find(opt => opt.name === value);
      if (!option) {
        console.log(`    ⚠ Opção não encontrada para ${fieldName}: ${value}`);
        return;
      }
      fieldValue = { singleSelectOptionId: option.id };
      
    } else if (field.dataType === 'DATE') {
      // Para campos de data
      fieldValue = { date: value };
      
    } else if (field.dataType === 'TEXT') {
      // Para campos de texto
      fieldValue = { text: value };
      
    } else {
      console.log(`    ⚠ Tipo de campo não suportado: ${field.dataType}`);
      return;
    }
    
    const mutation = `
      mutation UpdateProjectV2ItemFieldValue($projectId: ID!, $itemId: ID!, $fieldId: ID!, $value: ProjectV2FieldValue!) {
        updateProjectV2ItemFieldValue(input: {
          projectId: $projectId
          itemId: $itemId
          fieldId: $fieldId
          value: $value
        }) {
          projectV2Item {
            id
          }
        }
      }
    `;
    
    await graphqlWithAuth(mutation, {
      projectId: projectId,
      itemId: itemId,
      fieldId: field.id,
      value: fieldValue
    });
    
  } catch (error) {
    console.error(`    ⚠ Erro ao definir ${fieldName}: ${error.message}`);
  }
}

// Criar corpo do item
function createItemBody(task) {
  return `## 📋 Detalhes da Tarefa

**Colaborador:** ${task.colaborador}  
**Repositório:** ${task.repositorio}  
**Field:** ${task.field}  
**Prioridade:** ${task.prioridade}  
**Dificuldade:** ${task.dificuldade}  
**Subgrupo:** ${task.subgrupo}  
**Deadline:** ${task.deadline}  
**Estimativa:** ${task.estimativa}  
**Epic:** ${task.epic}  
**Status:** ${task.status}

## 📝 Descrição

Esta tarefa faz parte do roadmap de desenvolvimento do PetCare AI.

## ✅ Critérios de Aceitação

- [ ] Requisitos funcionais atendidos
- [ ] Testes implementados
- [ ] Documentação atualizada
- [ ] Code review aprovado
- [ ] QA validado

## 🔗 Links Relacionados

- [Roadmap Completo](https://github.com/orgs/${CONFIG.organization}/projects/${CONFIG.projectNumber})

---

> **Criado automaticamente em:** ${new Date().toISOString()}
`;
}

// Função auxiliar para delay
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Executar script
if (require.main === module) {
  main();
}

module.exports = {
  main,
  PROJECT_FIELDS,
  SAMPLE_TASKS,
  CONFIG
};