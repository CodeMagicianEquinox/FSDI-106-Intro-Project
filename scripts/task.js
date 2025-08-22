class Task {
    constructor(isImportant, title, desc, color, date, status, budget) {
        this.id = Date.now(); // Simple ID generation using timestamp
        this.isImportant = isImportant;
        this.title = title;
        this.desc = desc;
        this.color = color;
        this.date = date;
        this.status = status;
        this.budget = budget;
        this.createdAt = new Date();
    }
    
    // Method to get formatted creation date
    getFormattedCreatedDate() {
        return this.createdAt.toLocaleDateString() + ' ' + this.createdAt.toLocaleTimeString();
    }
    
    // Method to check if task is overdue
    isOverdue() {
        if (!this.date) return false;
        const taskDate = new Date(this.date);
        const now = new Date();
        return taskDate < now && this.status !== 'Completed';
    }
    
    // Method to get status with emoji
    getStatusWithEmoji() {
        const statusEmojis = {
            'New': '🆕',
            'In progress': '⏳',
            'Completed': '✅',
            'Cancelled': '❌'
        };
        return `${statusEmojis[this.status] || ''} ${this.status}`;
    }
    
    // Method to toggle importance
    toggleImportance() {
        this.isImportant = !this.isImportant;
        return this;
    }
    
    // Method to update status
    updateStatus(newStatus) {
        this.status = newStatus;
        return this;
    }
    
    // Method to get task summary
    getSummary() {
        return `${this.title} - ${this.status} ${this.isImportant ? '⭐' : ''}`;
    }
    
    // Method to convert task to JSON for storage
    toJSON() {
        return {
            id: this.id,
            isImportant: this.isImportant,
            title: this.title,
            desc: this.desc,
            color: this.color,
            date: this.date,
            status: this.status,
            budget: this.budget,
            createdAt: this.createdAt
        };
    }
}