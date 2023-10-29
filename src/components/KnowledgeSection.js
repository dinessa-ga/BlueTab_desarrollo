import React, { useState } from 'react';

function KnowledgeSection() {
    const [formData, setFormData] = useState({
        knowledge: [],

    });

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const addKnowledgeButton = (event) => {
        event.preventDefault();

        if (inputValue.trim() !== '') {
            const newKnowledge = [...formData.knowledge];
            newKnowledge.push(inputValue);
            setFormData({ ...formData, knowledge: newKnowledge });
            setInputValue('');
        }
    };

    const removeKnowledgeButton = (index) => {
        const newKnowledge = [...formData.knowledge];
        newKnowledge.splice(index, 1);
        setFormData({ ...formData, knowledge: newKnowledge });
    };

    const handleKnowledgeClick = (index) => {
        removeKnowledgeButton(index);
    };

    return (
        <section>
            <label htmlFor="knowledge" className="group-title">
                Conocimientos y habilidades
            </label>
            <div className='primary-line-knowledge'>
            <input
                type="text"
                name="knowledge"
                value={inputValue}
                onChange={handleChange}
                placeholder="Ingrese un conocimiento"
            />
            <button onClick={addKnowledgeButton}>Añadir</button>
            </div>
            {formData.knowledge.map((value, index) => (
                <div key={index}>
                    <button onClick={() => handleKnowledgeClick(index)}>{value}</button>
                </div>
            ))}
            
            
        </section>
    );
}

export default KnowledgeSection;
